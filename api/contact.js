import express from 'express'
import fs from 'fs/promises'
import path from 'path'

const app = express()

// Simple CORS middleware (avoid extra deps)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.sendStatus(204)
  next()
})

app.use(express.json())

const dataDir = path.join(process.cwd(), 'data')
const filePath = path.join(dataDir, 'contacts.json')
const bookingsFilePath = path.join(dataDir, 'bookings.json')

async function appendContact(entry) {
  await fs.mkdir(dataDir, { recursive: true })
  let arr = []
  try {
    const raw = await fs.readFile(filePath, 'utf8')
    arr = JSON.parse(raw)
  } catch (err) {
    // ignore if file does not exist or is invalid
  }
  arr.push(entry)
  await fs.writeFile(filePath, JSON.stringify(arr, null, 2), 'utf8')
}

async function appendBooking(entry) {
  await fs.mkdir(dataDir, { recursive: true })
  let arr = []
  try {
    const raw = await fs.readFile(bookingsFilePath, 'utf8')
    arr = JSON.parse(raw)
  } catch (err) {
    // ignore if file does not exist or is invalid
  }
  arr.push(entry)
  await fs.writeFile(bookingsFilePath, JSON.stringify(arr, null, 2), 'utf8')
}

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body || {}
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing name, email, or message' })
    }

    const entry = {
      name,
      email,
      message,
      createdAt: new Date().toISOString()
    }

    await appendContact(entry)

    // Optional: send email if SMTP env vars provided and nodemailer is installed
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.ADMIN_EMAIL) {
      try {
        const nodemailer = await import('nodemailer')
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        })

        const html = `<p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>`

        await transporter.sendMail({
          from: process.env.ADMIN_EMAIL,
          to: process.env.ADMIN_EMAIL,
          subject: `New contact from ${name}`,
          html
        })
      } catch (err) {
        console.error('Email send failed (optional):', err.message || err)
      }
    }

    return res.json({ success: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Server error' })
  }
})

app.post('/api/booking', async (req, res) => {
  try {
    const { name, email, phone, eventDate, location, guestCount, additionalNotes, packageId, packageName, packagePrice, bookingDate, termsAccepted } = req.body || {}
    
    if (!name || !email || !phone || !eventDate) {
      return res.status(400).json({ error: 'Missing required fields: name, email, phone, eventDate' })
    }

    const entry = {
      name,
      email,
      phone,
      eventDate,
      location,
      guestCount,
      additionalNotes,
      packageId,
      packageName,
      packagePrice,
      termsAccepted,
      bookingDate,
      status: 'pending',
      createdAt: new Date().toISOString()
    }

    await appendBooking(entry)

    // Optional: send email if SMTP env vars provided
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.ADMIN_EMAIL) {
      try {
        const nodemailer = await import('nodemailer')
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        })

        const html = `<p><strong>New Booking Request</strong></p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Package:</strong> ${packageName} (${packagePrice})</p>
          <p><strong>Event Date:</strong> ${eventDate}</p>
          <p><strong>Location:</strong> ${location || 'Not specified'}</p>
          <p><strong>Guest Count:</strong> ${guestCount || 'Not specified'}</p>
          <p><strong>Additional Notes:</strong> ${additionalNotes || 'None'}</p>`

        await transporter.sendMail({
          from: process.env.ADMIN_EMAIL,
          to: process.env.ADMIN_EMAIL,
          subject: `New Booking Request - ${packageName}`,
          html
        })
      } catch (err) {
        console.error('Email send failed (optional):', err.message || err)
      }
    }

    return res.json({ success: true, message: 'Booking request submitted successfully' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Server error' })
  }
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`)
  console.log('POST /api/contact with JSON { name, email, message }')
  console.log(`Saved contacts will be stored in: ${filePath}`)
  if (!process.env.SMTP_HOST) console.log('SMTP not configured; emails will NOT be sent.')
})

export default app

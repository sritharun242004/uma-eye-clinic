import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendEmail({ to, subject, html }) {
  if (!process.env.SMTP_HOST) {
    console.log('SMTP not configured, skipping email:', { to, subject })
    return
  }

  return transporter.sendMail({
    from: process.env.EMAIL_FROM || 'noreply@umaeyeclinic.in',
    to,
    subject,
    html,
  })
}

export async function sendAppointmentNotification(appointment) {
  const clinicEmail = process.env.CLINIC_EMAIL || 'info@umaeyeclinic.in'

  // Notify clinic
  await sendEmail({
    to: clinicEmail,
    subject: `New Appointment Request from ${appointment.name}`,
    html: `
      <h2>New Appointment Request</h2>
      <table style="border-collapse:collapse;">
        <tr><td style="padding:8px;font-weight:bold;">Name:</td><td style="padding:8px;">${appointment.name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Phone:</td><td style="padding:8px;">${appointment.phone}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Email:</td><td style="padding:8px;">${appointment.email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Date:</td><td style="padding:8px;">${appointment.date}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Time:</td><td style="padding:8px;">${appointment.time}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Doctor:</td><td style="padding:8px;">${appointment.doctor}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Treatment:</td><td style="padding:8px;">${appointment.treatment}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Message:</td><td style="padding:8px;">${appointment.message || 'N/A'}</td></tr>
      </table>
    `,
  })

  // Confirm to patient
  if (appointment.email) {
    await sendEmail({
      to: appointment.email,
      subject: 'Appointment Request Received - Uma Eye Clinic',
      html: `
        <h2>Thank You, ${appointment.name}!</h2>
        <p>We have received your appointment request. Our team will contact you shortly to confirm your appointment.</p>
        <p><strong>Requested Date:</strong> ${appointment.date}<br/>
        <strong>Requested Time:</strong> ${appointment.time}<br/>
        <strong>Treatment:</strong> ${appointment.treatment}</p>
        <p>If you need immediate assistance, please call us at <a href="tel:+914449023232">+91 44 49023232</a>.</p>
        <p>Warm regards,<br/>Uma Eye Clinic Team</p>
      `,
    })
  }
}

export async function sendContactNotification(contact) {
  const clinicEmail = process.env.CLINIC_EMAIL || 'info@umaeyeclinic.in'

  await sendEmail({
    to: clinicEmail,
    subject: `New Contact Message from ${contact.name}`,
    html: `
      <h2>New Contact Submission</h2>
      <table style="border-collapse:collapse;">
        <tr><td style="padding:8px;font-weight:bold;">Name:</td><td style="padding:8px;">${contact.name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Email:</td><td style="padding:8px;">${contact.email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Phone:</td><td style="padding:8px;">${contact.phone || 'N/A'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Subject:</td><td style="padding:8px;">${contact.subject || 'N/A'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Message:</td><td style="padding:8px;">${contact.message}</td></tr>
      </table>
    `,
  })
}

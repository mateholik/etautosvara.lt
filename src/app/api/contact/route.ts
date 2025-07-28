// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Vardas, el. paštas ir žinutė yra privalomi' },
        { status: 400 }
      );
    }

    // Create transporter using your Zoho SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.eu',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      requireTLS: true,
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Kontaktų forma" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email || process.env.EMAIL_USER,
      subject: `🔔 ${name} - Nauja užklausa`, // Put name first in subject

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555;">Kontakto informacija:</h3>
            <p><strong>Vardas:</strong> ${name}</p>
            <p><strong>El. paštas:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefono nr.:</strong> ${phone}</p>` : ''}
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #555;">Žinutė:</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(
              /\n/g,
              '<br>'
            )}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #1976d2;">
              <strong>Šis el. laiškas buvo išsiųstas iš etautosvara.lt kontakto formos</strong>
            </p>
          </div>
        </div>
      `,
      text: `
       
        Vardas: ${name}
        El. paštas: ${email}
        ${phone ? `Telefono nr.: ${phone}` : ''}
        
        Žinutė:
        ${message}
        
        Šis el. laiškas buvo išsiųstas iš etautosvara.lt kontakto formos
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'El. laiškas sėkmingai išsiųstas' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Klaida siunčiant el. laišką' },
      { status: 500 }
    );
  }
}

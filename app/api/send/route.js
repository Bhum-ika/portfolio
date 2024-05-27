import { NextResponse } from "next/server";
import { Resend } from "resend";

// Access environment variables
const apiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL || fromEmail;

if (!apiKey) {
  throw new Error("Missing API key. Please set RESEND_API_KEY in your environment variables.");
}

const resend = new Resend(apiKey);

export async function POST(req) {
  const { email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail], // Email will be sent to the specified TO_EMAIL address
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
          <p>From: {email}</p> {/* Include the sender's email in the message */}
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error });
  }
}

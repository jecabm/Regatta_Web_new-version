import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, company, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "info@regattaregisters.com",
    replyTo: email,
    subject: `New contact message from ${name}${company ? ` (${company})` : ""}`,
    text: `Name: ${name}\nCompany: ${company || "—"}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company || "—"}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr />
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${message}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

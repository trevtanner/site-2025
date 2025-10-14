import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  return NextResponse.json(
    { Message: "Email sent to Dasher successfully" },
    { status: 200 }
  );
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const comment = formData.get("comment");

  const htmlBody = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Get In Touch Comments:</strong></p>
    <p>${comment}</p>
  `;

  try {
    await sendgrid.send({
      to: process.env.EMAIL_TO, // Your email where you'll receive emails
      from: process.env.EMAIL_USER, // your website email address here - Must be a verified Single Sender
      subject: `Contact Us Form from ${name}`,
      html: htmlBody,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error sending custom quote: " + error },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Email sent to Dasher successfully" },
    { status: 200 }
  );
}

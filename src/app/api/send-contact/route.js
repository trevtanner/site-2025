import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const ALLOWED_ORIGIN = process.env.SITE_URL;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  tls: {
    ciphers: "SSLv3",
  },
});

export async function POST(req) {
  const referrer = req.headers.get("referer");

  if (!referrer || !referrer.startsWith(ALLOWED_ORIGIN)) {
    console.warn("Blocked request from unauthorized referrer:", referrer);
    return NextResponse.json(
      { error: "Unauthorized access or invalid origin." },
      { status: 403 }
    );
  }
  // return NextResponse.json(
  //   { Message: "Email sent to Dasher successfully" },
  //   { status: 200 }
  // );
  const data = await req.json();
  const name = data.name;
  const email = data.email;
  const company = data.company;
  const website = data.website;
  const topic = data.topic;
  const comments = data.comments;

  const htmlBody = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Website:</strong> ${website}</p>
    <p><strong>Topic:</strong> ${topic}</p>
    <p><strong>Get In Touch Comments:</strong></p>
    <p>${comments}</p>
  `;

  try {
    await transporter.sendMail({
      from: `Contact Form <${process.env.EMAIL_FROM}>`, // 'From' must use your domain
      to: process.env.EMAIL_TO,
      replyTo: data.email,
      subject: `Contact Form: ${data.topic} from ${data.name}`,
      html: htmlBody,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error sending responses: " + error },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Email sent successfully" },
    { status: 200 }
  );
}

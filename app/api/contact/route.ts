import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";
export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();
    if (!name || !email || !message) return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    await sendMail({ subject: "New Contact from Website", text:
`Name: ${name}
Email: ${email}
Phone: ${phone ?? ""}
Message:
${message}` });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}

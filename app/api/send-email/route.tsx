import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "four7518@gmail.com",
    to: "jeerasak.code@gmail.com",
    subject: "test send email",
    react: <WelcomeTemplate name="Four" />,
  });

  return NextResponse.json({});
}

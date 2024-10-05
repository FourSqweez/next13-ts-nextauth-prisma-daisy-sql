import { NextResponse } from "next/server";
import { renderAsync } from "@react-email/render";
import WelcomeTemplate from "@/emails/WelcomeTemplate";

export const runtime = "edge";

export async function GET() {
  try {
    const html = await renderAsync(
      WelcomeTemplate({ name: "John" }) as React.ReactElement,
    );
    return NextResponse.json({ html });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

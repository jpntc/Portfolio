import { Resend } from "resend";
import { NextResponse } from "next/server";

const initializeResend = async () => {
  const API_KEY = process.env.production.RESEND_API_KEY;
  const from_email = process.env.production.FROM_EMAIL;
  const my_gmail = process.env.production.MY_GMAIL;

  if (!API_KEY || !from_email || !my_gmail) {
    throw new Error("Missing required environment variables", API_KEY, from_email, my_gmail);
  }
  return [API_KEY, from_email, my_gmail];
};

export async function POST(req, res) {
  try {
    const [API_KEY, from_email, my_gmail] = await initializeResend();
     
    const resend = new Resend(API_KEY);
    const body = await req.json();

    if (body) {
      const { email, subject, message } = body;
      console.log("Received request:", email, subject, message);

      try {
        const data = await resend.emails.send({
          from: from_email,
          to: [my_gmail, email],
          subject: subject,
          react: (
            <>
              <h1>{subject}</h1>
              <h2>{message}</h2>
              <b></b>
              <p>Message submitted</p>
              <p>Thank you for your inquiry!</p>
            </>
          ),
        });
        return NextResponse.json(data);
      } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send email" });
      }
    } else {
      return NextResponse.json({ error: "Invalid request body" });
    }
  } catch (error) {
    console.error("Initialization error:", error);
    return NextResponse.json({ error: "Failed to initialize email service" });
  }
}

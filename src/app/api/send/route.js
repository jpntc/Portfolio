import { Resend } from "resend";
import { NextResponse } from "next/server";

const initializeResend = async () => {
  const API_KEY = process.env.RESEND_API_KEY;
  const from_email = process.env.FROM_EMAIL;
  const my_gmail = process.env.MY_GMAIL;

  if (!API_KEY || !from_email || !my_gmail) {
    throw new Error("Missing required environment variables");
  }

  const resend = new Resend(API_KEY);
  return [resend, from_email, my_gmail];
};

export async function POST(req, res) {
  try {
    const [resend, from_email, my_gmail] = await initializeResend();
    console.log("Resend initialized with:", resend, from_email, my_gmail);

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
              <p>{message}</p>
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

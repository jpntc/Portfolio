import { Resend } from "resend";
import { NextResponse } from "next/server";

const initializeResend = async () =>{
  const API_KEY = process.env.RESEND_API_KEY;
  const resend = new Resend(API_KEY);
  const from_email = process.env.FROM_EMAIL;
  const my_gmail = process.env.MY_GMAIL;
  return [resend, from_email, my_gmail];
}

export async function POST(req, res) {
  const [resend, from_email, my_gmail] = await initializeResend();
  console.log(resend, from_email, my_gmail)
  
  const body = await req.json();
  let data;
  if (body) {
    const { email, subject, message } = body;
    console.log(email, subject, message);
    try {
      data = await resend.emails.send({
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
    } catch (error) {
      console.log("Error sending email:", error);
      return NextResponse.json(error);
    }
  }
  return NextResponse.json(data);
}

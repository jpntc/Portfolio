import {Resend} from 'resend';
import {NextResponse} from 'next/server';


const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const MY_GMAIL = process.env.MY_GMAIL;

export async function POST(req, res) {
  const body =  await req.json();

  const {email, subject, message} = body;
  try {
    const data = await resend.emails.send({ 
      from: fromEmail,
      to: [MY_GMAIL,email],
      subject: subject,
      react:(
      <> 
      <h1>{subject}</h1>
        <p>{message}</p>
        <p>Message submitted</p>
        <p>Thank you for your inquiry!</p>
        </>)
    });
    console.log(data);
    return  NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return  NextResponse.json(error);
  }
}

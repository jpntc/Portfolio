import { NextResponse} from "next/server";


export async function GET(req) {
  const VAR = process.env.VAR;
  return NextResponse.json({ message: `${VAR} from the API!` });
}
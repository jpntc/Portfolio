import { NextResponse } from "next/server";

export async function GET() {
  const data = <h2>Route Works!</h2>;

  return NextResponse.json({
    message: data,
  });
}

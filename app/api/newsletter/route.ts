import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Subscribed to The Morning Bloom dispatch.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to subscribe." },
      { status: 500 }
    );
  }
}


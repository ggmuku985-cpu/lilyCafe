import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, date, time, guests, seatingArea, notes } = body;

    // Validate minimum requirements
    if (!name || !phone || !email || !date || !time || !guests) {
      return NextResponse.json(
        { success: false, error: "Please provide all required fields." },
        { status: 400 }
      );
    }

    // Generate realistic reservation reference
    const bookingId = `LILY-${Math.floor(1000 + Math.random() * 9000)}`;

    return NextResponse.json(
      {
        success: true,
        message: "Reservation confirmed successfully.",
        bookingId,
        details: {
          name,
          phone,
          email,
          date,
          time,
          guests,
          seatingArea: seatingArea || "Botanical Glasshouse",
          notes: notes || "",
          tableAssigned: "Table " + (Math.floor(Math.random() * 18) + 1),
          holdUntil: "15 minutes past reserved time",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal server error while processing booking." },
      { status: 500 }
    );
  }
}


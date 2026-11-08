import { NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs";
import path from "path";

const reservationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid 10-digit phone number")
    .regex(/^[+0-9\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  date: z.string().min(1, "Please choose a date"),
  time: z.string().min(1, "Please choose a time slot"),
  guests: z.string().min(1, "Please select number of guests"),
  seatingArea: z.string().default("Courtyard Garden"),
  notes: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const result = reservationSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error.errors[0]?.message || "Invalid reservation data",
        },
        { status: 400 }
      );
    }

    const { name, phone, email, date, time, guests, seatingArea, notes } = result.data;

    // Check that date is not in the past
    const reservationDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (reservationDate < today) {
      return NextResponse.json(
        { success: false, error: "Please select a date today or in the future" },
        { status: 400 }
      );
    }

    const bookingId = `LILY-${Math.floor(1000 + Math.random() * 9000)}`;
    const submission = {
      id: bookingId,
      name,
      phone,
      email,
      date,
      time,
      guests,
      seatingArea,
      notes: notes || "",
      createdAt: new Date().toISOString(),
      status: "confirmed",
    };

    // Store in data/reservations.json
    try {
      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "reservations.json");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      let existing = [];
      if (fs.existsSync(filePath)) {
        try {
          existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        } catch (_) {}
      }
      existing.push(submission);
      fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
    } catch (fsErr) {
      console.warn("Could not write to reservations.json:", fsErr);
    }

    return NextResponse.json({
      success: true,
      message: "Table booked successfully!",
      bookingId,
      details: {
        name,
        date,
        time,
        guests,
        seatingArea,
        tableAssigned: `Table ${Math.floor(Math.random() * 14) + 1}`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

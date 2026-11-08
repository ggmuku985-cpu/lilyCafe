import { NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs";
import path from "path";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[+0-9\s-]{10,15}$/, "Please enter a valid phone number"),
  subject: z.string().default("General Inquiry"),
  message: z.string().min(6, "Message must be at least 6 characters"),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const result = contactSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error.errors[0]?.message || "Invalid contact form data",
        },
        { status: 400 }
      );
    }

    const submission = {
      ...result.data,
      id: `MSG-${Date.now()}`,
      receivedAt: new Date().toISOString(),
    };

    // Store in data/contacts.json
    try {
      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "contacts.json");
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
      console.warn("Could not write to contacts.json:", fsErr);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! We received your message and will reply shortly.",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}


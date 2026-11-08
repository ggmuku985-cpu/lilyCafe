import { NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs";
import path from "path";

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const result = subscribeSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid email address",
        },
        { status: 400 }
      );
    }

    const { email } = result.data;
    const record = {
      email,
      subscribedAt: new Date().toISOString(),
    };

    // Store in data/subscribers.json
    try {
      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "subscribers.json");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      let existing = [];
      if (fs.existsSync(filePath)) {
        try {
          existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        } catch (_) {}
      }
      if (!existing.some((s: { email: string }) => s.email === email)) {
        existing.push(record);
        fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
      }
    } catch (fsErr) {
      console.warn("Could not write to subscribers.json:", fsErr);
    }

    return NextResponse.json({
      success: true,
      message: "Welcome to the Café Lily family! We've saved your email.",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}


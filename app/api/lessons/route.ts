import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lesson from "@/models/Lesson";

// Connect to the database
await connectDB();

// Handle GET requests
export async function GET() {
  try {
    const lessons = await Lesson.find({});
    return NextResponse.json(lessons, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch lessons" },
      { status: 500 }
    );
  }
}

// Handle POST requests
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const lesson = new Lesson(body);
    await lesson.save();
    return NextResponse.json(lesson, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create lesson" },
      { status: 500 }
    );
  }
}

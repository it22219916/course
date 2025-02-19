import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lesson from "@/models/Lesson";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

// Connect to the database
await connectDB();

// Helper function to verify admin access
async function verifyAdmin(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });
  if (!token) return { status: 401, message: "Unauthorized" };
  if (!token.admin) return { status: 403, message: "Forbidden" };
  return { status: 200 };
}

// Handle GET requests (no admin verification needed here)
export async function GET() {
  try {
    const lessons = await Lesson.find({});
    return NextResponse.json(lessons, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch lessons" },
      { status: 500 }
    );
  }
}

// Handle POST requests (requires admin)
export async function POST(request: NextRequest) {
  const adminCheck = await verifyAdmin(request);
  if (adminCheck.status !== 200) {
    return NextResponse.json(
      { error: adminCheck.message },
      { status: adminCheck.status }
    );
  }

  try {
    const body = await request.json();
    const lesson = new Lesson(body);
    await lesson.save();
    return NextResponse.json(lesson, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create lesson" },
      { status: 500 }
    );
  }
}

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

// Handle GET request: Fetch a single lesson by ID (open to all users)
export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.split("/").pop();
  if (!id) {
    return NextResponse.json(
      { error: "ID is missing in the request" },
      { status: 400 }
    );
  }

  try {
    const lesson = await Lesson.findById(id);
    if (!lesson) {
      return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
    }
    return NextResponse.json(lesson, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch lesson" },
      { status: 500 }
    );
  }
}

// Handle PUT request: Update a lesson by ID (admin only)
export async function PUT(request: NextRequest) {
  const adminCheck = await verifyAdmin(request);
  if (adminCheck.status !== 200) {
    return NextResponse.json(
      { error: adminCheck.message },
      { status: adminCheck.status }
    );
  }

  const id = request.nextUrl.pathname.split("/").pop();
  if (!id) {
    return NextResponse.json(
      { error: "ID is missing in the request" },
      { status: 400 }
    );
  }

  try {
    const body = await request.json();
    const lesson = await Lesson.findByIdAndUpdate(id, body, { new: true });
    if (!lesson) {
      return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
    }
    return NextResponse.json(lesson, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update lesson" },
      { status: 500 }
    );
  }
}

// Handle DELETE request: Delete a lesson by ID (admin only)
export async function DELETE(request: NextRequest) {
  const adminCheck = await verifyAdmin(request);
  if (adminCheck.status !== 200) {
    return NextResponse.json(
      { error: adminCheck.message },
      { status: adminCheck.status }
    );
  }

  const id = request.nextUrl.pathname.split("/").pop();
  if (!id) {
    return NextResponse.json(
      { error: "ID is missing in the request" },
      { status: 400 }
    );
  }

  try {
    const lesson = await Lesson.findByIdAndDelete(id);
    if (!lesson) {
      return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Lesson deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete lesson" },
      { status: 500 }
    );
  }
}

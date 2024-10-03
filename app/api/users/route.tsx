import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// GET - getting data
export function GET(request: NextRequest) {
  // fetch users from a db
  return NextResponse.json([
    { id: 1, name: "Four" },
    { id: 2, name: "Alex" },
  ]);
}
// POST - creating data
// PUT - updating data

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Validate
  const validation = schema.safeParse(body);
  if (!validation.success)
    // If invalid, return 400
    return NextResponse.json(validation.error.errors, { status: 400 });
  // Else, return data
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}

import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "Four" });
  // Fetch data from a db
  // If not found, return 404 error
  // Else return data
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  // Validate the request body
  const body = await request.json();
  // If invalid, return 400
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  // Fetch the user with the given id
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: body.name });
  // If doesn't exist, return 404
  // Update the user
  // Return the updated user
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({});
}

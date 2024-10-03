import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
  // Fetch data from a db
  // If not found, return 404 error
  // Else return data
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

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

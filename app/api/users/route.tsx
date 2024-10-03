import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

// GET - getting data
export async function GET(request: NextRequest) {
  // fetch users from a db
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
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

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
}

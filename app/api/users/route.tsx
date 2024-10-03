import { NextRequest, NextResponse } from "next/server";

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

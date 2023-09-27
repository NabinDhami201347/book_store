import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, name, password } = body;

    if (!name || !email || !password) {
      return new NextResponse("All Fields are required", { status: 400 });
    }
    const isExists = await db.user.findUnique({ where: { email } });
    if (isExists) {
      return new NextResponse("User already exists with this email", { status: 400 });
    }

    const hash = await bcrypt.hash(password, 12);
    const user = await db.user.create({
      data: {
        name,
        email,
        password: hash,
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.log("[REGISTER] Error: " + error.message);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

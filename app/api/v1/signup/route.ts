import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

export async function POST(req: NextRequest) {
    try {
        const { username, email, password } = await req.json();

        if (!username || !email || !password) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        await prisma.user.create({
            data: { username, email, password }
        });

        return NextResponse.json({ message: "Account created successfully" });
    } catch (error: any) {
        if (error.code === 'P2002') {
            return NextResponse.json(
                { message: "Username or email already exists" },
                { status: 409 }
            );
        }
        return NextResponse.json(
            { message: "Error creating account" },
            { status: 500 }
        );
    }
}
import bcrypt from "bcrypt";
import { ConnectDB } from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const newUser = await req.json();
    // console.log(newUser);
    try {
        const db = await ConnectDB();
        // Check if db is undefined or null
        if (!db) {
            return NextResponse.json({ message: "Database connection failed" }, { status: 500 });
        }
        const collection = db.collection("users");
        const existUser = await collection.findOne({ email: newUser.email });
        if (existUser) {
            return NextResponse.json({ message: "User already exist" }, { status: 400 });
        }
        const hash = bcrypt.hashSync(newUser.password, 14);
        // const result = await collection.insertOne({ ...newUser, password: hash });
        await collection.insertOne({ ...newUser, password: hash });
        // console.log(result);
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
};
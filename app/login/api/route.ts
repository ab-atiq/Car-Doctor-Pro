import bcrypt from "bcrypt";
import { ConnectDB } from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const body = await req.json();
    // console.log(body);
    try {
        const db = await ConnectDB();
        const collection = db.collection("users");
        const user = await collection.findOne({ email: body.email });
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 400 });
        }
        const validPassword = await bcrypt.compare(body.password, user.password);
        if (!validPassword) {
            return NextResponse.json({ message: "Invalid password" }, { status: 400 });
        }
        return NextResponse.json({ message: "Login successful" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
};
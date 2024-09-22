import bcrypt from "bcrypt";
import { ConnectDB } from "@/lib/connectDB";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
    const body = await req.json();
    console.log(body);
    try {
        const db = await ConnectDB();
        const collection = db.collection("users");
        const user = await collection.findOne({ email: body.email });
        if (!user) {
            return Response.json({ message: "User not found" }, { status: 400 });
        }
        const validPassword = await bcrypt.compare(body.password, user.password);
        if (!validPassword) {
            return Response.json({ message: "Invalid password" }, { status: 400 });
        }
        return Response.json({ message: "Login successful" }, { status: 200 });
    } catch (error) {
        console.log(error);
    }
};
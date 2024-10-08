import { ConnectDB } from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { email: string } }) => {
    const { email } = params;
    console.log(email);
    try {
        const db = await ConnectDB();
        // Check if db is undefined or null
        if (!db) {
            return NextResponse.json({ message: "Database connection failed" }, { status: 500 });
        }
        const bookingsCollection = db.collection("bookings");
        const bookings = await bookingsCollection.find({ email: email }).toArray();
        // console.log(bookings);
        if (!bookings) {
            return NextResponse.json({ error: "Service not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Service Details", data: bookings }, { status: 200 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "An error occurred", details: e }, { status: 500 });
    }
};

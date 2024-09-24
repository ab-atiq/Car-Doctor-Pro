import { ConnectDB } from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    const booking = await request.json();
    try {
        const db = await ConnectDB();
        // Check if db is undefined or null
        if (!db) {
            return NextResponse.json({ message: "Database connection failed" }, { status: 500 });
        }
        const bookingsCollection = db.collection("bookings");
        const newBooking = await bookingsCollection.insertOne(booking);
        return NextResponse.json({ message: "Service Booking Successfully", booking: newBooking });
    } catch (e) {
        return NextResponse.json(e);
    }
}
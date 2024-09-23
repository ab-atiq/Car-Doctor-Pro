import { ConnectDB } from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    const booking = await request.json();
    const db = await ConnectDB();
    const bookingsCollection = db.collection("bookings");
    try {
        const newBooking = await bookingsCollection.insertOne(booking);
        return NextResponse.json({ message: "Service Booking Successfully", booking: newBooking });
    } catch (e) {
        return NextResponse.json(e);
    }
}
import { ConnectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    // console.log(id);
    try {
        const db = await ConnectDB();
        // Check if db is undefined or null
        if (!db) {
            return NextResponse.json({ message: "Database connection failed" }, { status: 500 });
        }
        const bookingsCollection = await db.collection("bookings");
        const booking = await bookingsCollection.findOne({ _id: new ObjectId(id) });
        // console.log(booking)
        if (!booking) {
            return NextResponse.json({ error: "Bookings not found" }, { status: 404 });
        }

        const deletedBooking = await bookingsCollection.deleteOne({ _id: new ObjectId(id) });

        return NextResponse.json({ message: "Bookings Deleted", data: deletedBooking }, { status: 200 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "An error occurred", details: e }, { status: 500 });
    }
};

import { ConnectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }: { params: { id: string } }) => {
    const { id } = params;
    // console.log(id);
    try {
        const db = await ConnectDB();
        const bookingsCollection = await db?.collection("bookings");
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

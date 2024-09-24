import { ConnectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await ConnectDB();
    // Check if db is undefined or null
    if (!db) {
        return NextResponse.json({ message: "Database connection failed" }, { status: 500 });
    }
    const servicesCollection = db.collection("services");
    try {
        const services = await servicesCollection.find().toArray();
        return NextResponse.json({ services });
    } catch (e) {
        return NextResponse.json(e);
    }
}
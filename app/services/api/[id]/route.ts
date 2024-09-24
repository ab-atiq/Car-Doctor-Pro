import { ConnectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    // console.log(id);
    if (!ObjectId.isValid(id)) {
        return NextResponse.json({ error: "Invalid service ID" }, { status: 400 });
    }
    try {
        const db = await ConnectDB();
        // Check if db is undefined or null
        if (!db) {
            return NextResponse.json({ message: "Database connection failed" }, { status: 500 });
        }
        const servicesCollection = db.collection("services");
        const service = await servicesCollection.findOne({ _id: new ObjectId(id) });

        if (!service) {
            return NextResponse.json({ error: "Service not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Service Details", data: service }, { status: 200 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "An error occurred", details: e }, { status: 500 });
    }
};

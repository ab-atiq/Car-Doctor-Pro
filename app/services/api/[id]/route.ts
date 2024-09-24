import { ConnectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { id } = params;
    // console.log(id);
    try {
        const db = await ConnectDB();
        const servicesCollection = db.collection("services");
        const service = await servicesCollection.findOne({ _id: id });

        if (!service) {
            return NextResponse.json({ error: "Service not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Service Details", data: service }, { status: 200 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "An error occurred", details: e }, { status: 500 });
    }
};

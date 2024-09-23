import { ConnectDB } from "@/lib/connectDB";
import { services } from "@/app/_components/Services/servicesData";
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await ConnectDB();
    const servicesCollection = db.collection("services");
    try {
        await servicesCollection.deleteMany();
        const res = await servicesCollection.insertMany(services);
        return NextResponse.json({ message: "Seeded Successfully" }, { data: res });
    } catch (e) {
        return NextResponse.json(e);
    }
}
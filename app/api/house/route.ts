import { offers } from "@/db/offers";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    const params = new URL(request.url).searchParams;
    const id = params.get("id")

    const houseData = offers.filter(offer => 
        id ? offer.id==+id:""
    )
    return NextResponse.json(houseData);
}
import { offers } from "@/db/offers";
import { NextResponse } from "next/server";


export async function GET(response: Response) {
    return NextResponse.json(offers)
}
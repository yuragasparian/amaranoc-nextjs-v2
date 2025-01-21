import { offers } from "@/db/offers";
import { regions } from "@/db/regions";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const result = regions.map(region => {
        const count = offers.filter(offer => offer.address === region.name).length;
        return {
            name: region.name,
            id: region.id,
            count: count,
        };
    });
    const sortedResult = result.sort((a, b) => b.count - a.count)


    return NextResponse.json(sortedResult);
}
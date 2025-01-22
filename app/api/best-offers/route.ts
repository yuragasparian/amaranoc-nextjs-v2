import { offers } from "@/db/offers";
import { NextResponse } from "next/server";
import React from "react";
import { json } from "stream/consumers";

export async function GET(request: Request) {
    const params = new URL(request.url).searchParams;

    const addresses = params.get("regions")?.split(",").filter((region) => region.trim().replace("+", " ") !== "");
    const section = params.get("section")?.trim() || null;
    const rating = params.get("rating") ? Number(params.get("rating")) : null;
    const minPrice = params.get("min_price") ? Number(params.get("min_price")) : null;
    const maxPrice = params.get("max_price") ? Number(params.get("max_price")) : null;
    const overnight = params.get("overnight")?.trim() || null;
    const maxPeopleCount = params.get("permissible_people_number") ? Number(params.get("permissible_people_number")) : null;
    const allowedPeoplePerNight = params.get("allowedPeoplePerNight") ? Number(params.get("allowedPeoplePerNight")) : null;
    const roomsCount = params.get("roomsCount") ? Number(params.get("roomsCount")) : null;
    const bathroomsCount = params.get("bathroomsCount") ? Number(params.get("bathroomsCount")) : null;
    const poolStatus = params.get("poolStatus") ? params.get("poolStatus") === "true" : null;
    const poolType = params.get("poolType")?.trim() || null;
    const query = params.get("query")?.trim().toLowerCase() || null;
    const currentPage = params.get("page") ? Number(params.get("page")) : 1;


    const filteredOffers = offers.filter((offer) => {
        const matchesSection = section ? offer.section === section : true;
        const matchesAddress = addresses && addresses.length > 0 ? addresses.includes(offer.address) : true;
        const matchesRating = rating !== null ? offer.rating === rating : true;
        const matchesPriceRange =
            (minPrice !== null ? offer.price >= minPrice : true) &&
            (maxPrice !== null ? offer.price <= maxPrice : true);
        const matchesOvernight = overnight ? offer.overnight === overnight : true;
        const matchesMaxPeople = maxPeopleCount !== null ? offer.maxPeopleCount > maxPeopleCount : true;
        const matchesAllowedPeople = allowedPeoplePerNight !== null ? offer.allowedPeoplePerNight === allowedPeoplePerNight : true;
        const matchesRoomsCount = roomsCount !== null ? offer.roomsCount === roomsCount : true;
        const matchesBathroomsCount = bathroomsCount !== null ? offer.bathroomsCount === bathroomsCount : true;
        const matchesPoolStatus = poolStatus !== null ? offer.pool.status === poolStatus : true;
        const matchesPoolType = poolType ? offer.pool.type === poolType : true;
        const matchesQuery = query ? offer.address.toLowerCase().includes(query) : true;

        return (
            matchesSection &&
            matchesAddress &&
            matchesRating &&
            matchesPriceRange &&
            matchesOvernight &&
            matchesMaxPeople &&
            matchesAllowedPeople &&
            matchesRoomsCount &&
            matchesBathroomsCount &&
            matchesPoolStatus &&
            matchesPoolType &&
            matchesQuery
        );
    });

    const sortedOffers = filteredOffers.sort((a, b) => b.rating - a.rating);
    const commonOffers = offers.sort((a, b) => b.rating - a.rating);



    const offersPerPage = 15;
    const startIndex = (currentPage - 1) * offersPerPage;
    const endIndex = startIndex + offersPerPage;

    const slicedOffers = sortedOffers.slice(startIndex, endIndex);
    const slicedCommonOffers = commonOffers.slice(startIndex, endIndex);

    const responseOffers = slicedOffers.length > 0
        ? {data:slicedOffers, pagesCount: Math.ceil(sortedOffers.length / 15)}
        : {data:slicedCommonOffers, pagesCount: Math.ceil(commonOffers.length / 15)};

    return NextResponse.json(responseOffers);
}

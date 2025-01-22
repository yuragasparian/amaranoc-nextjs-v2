export interface DiscountProperty {
  title: string; id: number; discount: string; description: string
}

export const sales: DiscountProperty[] = [
  {
    id: 1,
    discount: "-15%",
    title: "Discount depending on the number of days booked",
    description:
      "Get a 5-15% discount by making a reservation from 3 to 20 days.",
  },
  {
    id: 2,
    discount: "-10%",
    title: "The most popular Reel on the social platform",
    description:
      "Present one of your best days in one of amaranoc.am's mansions with a video version and get a 15% discount",
  },
  {
    id: 3,
    discount: "-5%",
    title: "Add 5% discount for every 3rd visit",
    description:
      "Make multiple bookings and get 5% discount for every 3rd booking",
  },
];
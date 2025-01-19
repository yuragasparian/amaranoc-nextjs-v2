import { Checkbox } from "@/components/ui/checkbox";

export function Regions() {

  const regions: { name: string; id: number }[] = [
    { name: "Dilijan", id: 1 },
    { name: "Tsaghkadzor", id: 2 },
    { name: "Yerevan", id: 3 },
    { name: "Dzoraghbyur", id: 4 },
    { name: "Arzni", id: 5 },
    { name: "Jrvezh", id: 6 },
    { name: "Ashtarak", id: 7 },
    { name: "Garni", id: 8 },
    { name: "Nor Gadzhan", id: 9 },
    { name: "Abovyan", id: 10 },
    { name: "Ptghni", id: 11 },
    { name: "Sevan", id: 12 },
    { name: "Kasakh", id: 13 },
    { name: "Zovuni", id: 14 },
    { name: "Jermuk", id: 15 },
    { name: "Etchmiadzin", id: 16 },
    { name: "Yeghvard", id: 17 },
    { name: "Bjni", id: 19 },
    { name: "Stepanavan", id: 20 },
    { name: "Hrazdan", id: 21 },
    { name: "Akunk", id: 22 },
    { name: "Argel", id: 23 },
    { name: "Arindzh", id: 24 },
    { name: "Ohanavan", id: 25 },
    { name: "Byureghavan", id: 26 },
    { name: "Teghenik", id: 27 },
    { name: "Vanadzor", id: 28 },
    { name: "Gyulagarak", id: 29 },
    { name: "Ijevan", id: 30 },
    { name: "Aghartsin", id: 31 },
    { name: "Arzakan", id: 32 },
    { name: "Qarashamb", id: 33 },
    { name: "Mayakovski", id: 34 },
    { name: "Nor Artamet", id: 35 },
    { name: "Fantan", id: 36 },
    { name: "Agveran", id: 37 },
    { name: "Parpi", id: 38 },
    { name: "Oshakan", id: 39 },
    { name: "Aghdzk", id: 40 },
    { name: "Bazmaghbyur", id: 41 },
    { name: "Parakar", id: 42 },
    { name: "Artashat", id: 43 },
    { name: "Argavand", id: 44 },
    { name: "Aygestan", id: 45 },
    { name: "Shaumyan", id: 46 },
    { name: "Alapars", id: 47 },
    { name: "Nor Gexi", id: 48 },
    { name: "Nuruz", id: 49 },
    { name: "Mrgashen", id: 50 },
    { name: "Goght", id: 51 },
    { name: "Qanakerravan", id: 52 },
    { name: "Hankavan", id: 53 },
    { name: "Hatavan", id: 54 },
    { name: "Dsegh", id: 55 },
    { name: "Haghpat", id: 56 },
    { name: "Odzun", id: 57 },
    { name: "Gavar", id: 58 },
    { name: "Drakhtik", id: 59 },
    { name: "Agarak", id: 60 },
    { name: "Aparan", id: 61 },
    { name: "Karbi", id: 62 },
    { name: "Burakan", id: 63 },
    { name: "Geghard", id: 64 },
    { name: "Kharberd", id: 65 },
  ];

  return (
    <div className="h-60 overflow-y-scroll w-full">
        {regions.map((region) => (
        <div className="flex items-center space-x-2 mt-3" key={region.id}>
          <Checkbox id={region.name} />
          <label
            htmlFor={region.name}
            className="text-sm leading-none opacity-70"
          >
            {region.name}
          </label>
        </div>
      ))}
    </div>
  );
}

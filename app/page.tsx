import Filters from "./../components/Filters/index";
import SideFilterContent from "./../components/Filters/sideFilterContent/index";
import { Sections } from "./../components/Sections/index";
import Offers from "./../components/Offers/index";

export default function Home() {
  return (
    <div className="lg:m-14 m-8">
      <div className="flex gap-6">
        <SideFilterContent className="xl:block xl:w-1/4 hidden  " />
        <div className="xl:w-3/4 w-full">
          <Filters />
          <Sections />
          <Offers />
        </div>
      </div>
    </div>
  );
}

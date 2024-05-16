"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Search = ({ fromList, destination, checkin, checkout }) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const [allowSearch, setAllowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState({
    destination: destination || "all",
    checkin: checkin,
    checkout: checkout,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const state = { ...searchTerm, [name]: value };

    setSearchTerm(state);

    if (
      new Date(state.checkin).getTime() > new Date(state.checkout).getTime()
    ) {
      setAllowSearch(false);
    } else {
      setAllowSearch(true);
    }
  };

  function doSearch(event) {
    const params = new URLSearchParams();

    params.set("destination", searchTerm?.destination || "all");
    if (searchTerm?.checkin && searchTerm?.checkout) {
      params.set("checkin", searchTerm?.checkin);
      params.set("checkout", searchTerm?.checkout);
    }

    if (pathname.includes("hotels")) {
      replace(`${pathname}?${params.toString()}`);
    } else {
      replace(`${pathname}hotels?${params.toString()}`);
    }
  }

  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div id="searchParams" className={fromList && "!shadow-none"}>
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select
                onChange={handleChange}
                name="destination"
                id="destination"
                defaultValue={searchTerm?.destination}
              >
                <option value="Catania">Catania</option>
                <option value="Puglia">Puglia</option>
                <option value="Frejus">Frejus</option>
                <option value="Calvi">Calvi</option>
                <option value="Paris">Paris</option>
                <option value="Cergy">Cergy</option>
                <option value="Karlovasi">Karlovasi</option>
                <option value="Saint-Denis">Saint-Denis</option>
                <option value="Le Pré-Saint-Gervais">
                  Le Pré-Saint-Gervais
                </option>
              </select>
            </h4>
          </div>

          <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input
                onChange={handleChange}
                type="date"
                name="checkin"
                id="checkin"
                value={searchTerm?.checkin}
              />
            </h4>
          </div>

          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input
                onChange={handleChange}
                type="date"
                name="checkout"
                id="checkout"
                value={searchTerm?.checkout}
              />
            </h4>
          </div>
        </div>
      </div>

      <button onClick={doSearch} disabled={!allowSearch} className="search-btn">
        🔍️ {fromList ? "Modify Search" : "Search"}
      </button>
    </>
  );
};

export default Search;

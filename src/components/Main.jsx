import React, { useEffect, useState } from "react";
import FilterCountry from "./FilterCountry";
import Countries from "./Countries";
import { Loader } from "./Loader";
import http from "../utils/axios";
import useDebounce from "../customHooks/useDebounce";

function Main() {
  
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(null);
  const debouncedSearch = useDebounce(search, 500);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    http("/countries?limit=9&skip=1").then((data) => {
      setCountries(data.data.data);
      setFilteredCountries(data.data.data);
    });
  }, []);

  useEffect(() => {
    let copied = [...countries]; 

    if (debouncedSearch) {
      copied = copied.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase())
      );
    }
    if (filter) {
      copied = copied.filter((country) => country.region === filter);
    }

    setFilteredCountries(copied);
  }, [debouncedSearch, filter, countries]);

  return (
    <div className="main">
      <FilterCountry
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      {countries.length > 0 ? (
        <Countries countries={filteredCountries} />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Main;

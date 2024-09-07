import React, { useCallback } from "react";

function FilterCountry({ search, setSearch, filter, setFilter }) {
  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, [setSearch]);

  const handleFilterChange = useCallback((e) => {
    setFilter(e.target.value);
  }, [setFilter]);

  return (
    <div className="container mx-auto mt-12">
      <div className="flex flex-col gap-3 sm:flex-row justify-between">
        <div className="input-search">
          <label className="input input-bordered flex items-center gap-3 w-3/4 md:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              value={search}
              onChange={handleSearch}
              type="text"
              className="grow"
              placeholder="Search for a country..."
            />
          </label>
        </div>
        <div className="select-region">
          <select
            value={filter || ""}
            onChange={handleFilterChange}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="">Filtred by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterCountry;

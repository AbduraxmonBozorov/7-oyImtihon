import React from "react";
import Country from "./Country";

function Countries({ countries }) {

  return (
    <div className="countries mt-12">
      <div className="container mx-auto flex flex-wrap flex-col gap-2 justify-center items-center sm:flex-row sm:gap-3 sm:gap-x-5 sm:justify-center md:gap-3 md:justify-between">
        {countries.map(function (country, index) {
          return <Country key={index} country={country}/>;
        })}
      </div>
    </div>
  );
}

export default Countries;

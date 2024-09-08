import React from "react";
import { useNavigate } from "react-router-dom";

function Country({ country }) {
  const navigate=useNavigate();

    
    function handleCountry(e){
        console.log(country.name.slug);
        navigate(`/detailes/${country.name.slug}`);
    }
  return (
    <div
      className="country cursor-pointer hover:shadow-lg card bg-base-100 shadow-md w-11/12 sm:w-2/5 md:w-1/4 lg:w-1/5"
      style={{ height: "336px" }}
      onClick={handleCountry}
    >
      <figure>
        <img
          src={country.flags.png}
          alt={country.flags.alt}
          className="w-full"
          style={{ height: "160px" }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold">{country.name.common}</h2>
        <div className="flex justify-start">
            <p>Population: </p>
            <span>{country.population}</span>
        </div>
        <div className="flex justify-start">
            <p>Region: </p>
            <span>{country.region}</span>
        </div>
        <div className="flex justify-start">
            <p>Capital: </p>
            <span>{country.capital[0]}</span>
        </div>
      </div>
    </div>
  );
}

export default Country;

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import left from "../assets/images/left.svg";
import { useLocation, useNavigate } from "react-router-dom";
import http from "../utils/axios";

function Detailes() {
  const [country, setCountry] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const slug = location.pathname.split("/")[2];
  console.log(country);

  useEffect(() => {
    http(`/countries/${slug}`)
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, [slug]);

  if (!country) {
    return <div>Loading...</div>; // Show loading indicator while data is being fetched
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto pt-10">
        <button className="btn mb-5" onClick={() => navigate(-1)}>
          <img src={left} alt="Back" />
          <span>back</span>
        </button>
        <div className="about flex flex-row flex-wrap gap-5">
          <img
            src={country.flags?.svg}
            className="w-full md:w-2/5"
            alt={`${country.name?.common} flag`}
          />
          <div className="country-info pt-5 flex">
            <div className="first">
              <h2 className="font-bold">{country.name?.common}</h2>
              <p>Native Name: {country.name?.nativeName}</p>
              <p>Population: {country.population.toLocaleString()}</p>
              <p>Region: {country.region}</p>
              <p>Subregion: {country.subregion}</p>
              <p>Capital: {country.capital?.join(", ")}</p>
            </div>
            <div className="second  md:mt-16">
              <p>Top Level Domain: {country.tld?.join(", ")}</p>
              <p>
                Currencies:{country.currencies[0]}
              </p>
              <p>
                Languages: {Object.values(country.languages || {}).join(", ")}
              </p>
            </div>
            <br />
            <div className="borderCountries">
                
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Detailes;

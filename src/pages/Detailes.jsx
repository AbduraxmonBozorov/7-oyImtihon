import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import left from "../assets/images/left.svg";
import { useLocation, useNavigate } from "react-router-dom";
import http from "../utils/axios";
import { Loader } from "../components/Loader";

function Detailes() {
  const [country, setCountry] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const slug1 = location.pathname.split("/")[2];
   

  useEffect(() => {
    http(`/countries/${slug1}`)
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, [slug1]);

  if (!country) {
    return (
      <div className="m-10">
        <Loader />
      </div>
    );
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
            className="w-11/12 mx-auto md:w-2/5"
            alt={`${country.name?.common} flag`}
          />
          <div className="country-info pt-5 flex flex-col">
            <div className="flex flex-row flex-wrap">
              <div className="first">
                <h2 className="font-bold">{country.name?.common}</h2>
                <p><span className="font-bold">Native Name:</span> {country.name.nativeName}</p>
                <p><span className="font-bold">Population:</span> {country.population}</p>
                <p><span className="font-bold">Region:</span> {country.region}</p>
                <p><span className="font-bold">Subregion:</span> {country.subregion}</p>
                <p><span className="font-bold">Capital:</span> {country.capital}</p>
              </div>
              <div className="second  md:mt-16">
                <p>Top Level Domain: {country.tld}</p>
                <p>Currencies:{country.currencies[0]}</p>
                <p>
                  Languages: {Object.values(country.languages || {}).join(", ")}
                </p>
              </div>
            </div>

            <div className="borderCountries mt-5">
              <p className="me-3">Border Countries:</p>
              <div>
               {/* {
                country.borders ? country.borders.map((val, index)=>(
                    <button key={index}>{val}</button>
                )) : "No Borders"
               } */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailes;

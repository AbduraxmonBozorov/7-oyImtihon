import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import left from "../assets//images/left.svg";
import { useLocation } from "react-router-dom";
import http from "../utils/axios";

function Detailes() {
  const [country, setCountry] = useState({});
  console.log(country);

  const location = useLocation().pathname;
  let slug = location.split("/")[2];

  useEffect(() => {
    http(`/countries/${slug}`).then((data) => {
      setCountry(data.data);
    });
  }, [slug]);

  return (
    <div>
      <Header />
      <div className="container mx-auto pt-10">
        <button className="btn mb-5">
          <img src={left} alt="" />
          <span>back</span>
        </button>
        <div className="about flex flex-row flex-wrap gap-3">
          <img src={country.flags.svg} className="w-full md:w-1/2" alt="" />
          <div className="country-info">
            <div className="first">
              <h2>Name</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailes;

import React from "react";

function Loader() {
  return (
    <div className="w-full h-20 p-5 flex justify-center items-center">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
}

export { Loader };

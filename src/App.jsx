import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Home from "./pages/Home";
import Detailes from "./pages/Detailes";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme.theme);
  }, [theme]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/detailes/:id" element={<Detailes></Detailes>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;

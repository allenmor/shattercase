import React from "react";
import NavBar from "../../NavBar";
import CasesNav from "../../CasesNav";
import IphoneCard from "./IphoneCard";
import { useState, useEffect } from "react";

function Iphone11() {
  const [cases, setCases] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/allenmor/shattercase/main/db.json")
      .then((res) => res.json())
      .then((data) => {
        setCases(data[0].iphone11);
      });
  }, []);
  return (
    <>
      <NavBar />
      <CasesNav />
        <h1 className="phone-header">Iphone 11 cases</h1>
      <div className="phone-cases-div">
        {cases.map((el, i) => {
          return <IphoneCard key={i} iphone={el} />;
        })}
      </div>
    </>
  );
}

export default Iphone11;

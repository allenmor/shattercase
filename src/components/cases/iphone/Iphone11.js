import React, { useState, useEffect } from "react";
import NavBar from "../../NavBar";
import CasesNav from "../../CasesNav";
import IphoneCard from "./IphoneCard";
import { useLocation } from "react-router-dom";

function Iphone11() {
  const [cases, setCases] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");

  const location = useLocation();
  const whichPhone = location.state?.data || "iphone11";
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/allenmor/shattercase/main/db.json")
      .then((res) => res.json())
      .then((data) => {
        setCases(data[whichPhone]);
        console.log(data);
      });
  }, [whichPhone]);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value.toLowerCase());
  };

  const filteredCases = selectedColor === "all colors"
    ? cases
    : cases.filter((item) => item.item.toLowerCase().includes(selectedColor));


  const allColors = [
    "All colors",
    "Black",
    "White",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Purple",
    "Pink",
    'Teal',
    'Transparent',
    'Wallet',
    'Design',
    'Glitter',
    'Kickstand',
    'Clip',
    'Shockproof',
    'Magnetic',
    'Ring',
  ];

  return (
    <>
      <NavBar />
      <CasesNav />
      <div className="color-div">
        <label htmlFor="color-select">Filter by color:</label>
        <select id="color-select" onChange={handleColorChange}>
          {allColors.map((color, i) => (
            <option key={i} value={color.toLowerCase()}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div className="phone-cases-div">
        {filteredCases.map((el, i) => {
          return <IphoneCard key={i} iphone={el} />;
        })}
      </div>
    </>
  );
}

export default Iphone11;

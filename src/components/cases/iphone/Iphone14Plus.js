import React from 'react'
import NavBar from '../../NavBar'
import CasesNav from '../../CasesNav'
import IphoneCard from './IphoneCard'
import { useState,useEffect } from 'react'

function Iphone14Plus() {

  const [cases, setCases] = useState([])
  useEffect(()=>{
  
    fetch('https://raw.githubusercontent.com/allenmor/shattercase/main/db.json')
    .then(res => res.json())
    .then(data => {
      setCases(data[10].iphone14plus)
    })
  },[])
  return (
    <>
      <NavBar />
        <CasesNav />
      <div className="phone-cases-div">
        <h1>Iphone 11 cases</h1>
        {cases.map((el, i) => {
          return <IphoneCard key={i} iphone={el} />;
        })}
      </div>
    </>
  )
}

export default Iphone14Plus
import React from 'react'
import NavBar from '../../NavBar'
import CasesNav from '../../CasesNav'
import IphoneCard from './IphoneCard'
import { useState,useEffect } from 'react'

function Iphone14Pro() {

  const [cases, setCases] = useState([])
  useEffect(()=>{
  
    fetch('https://raw.githubusercontent.com/allenmor/shattercase/main/db.json')
    .then(res => res.json())
    .then(data => {
      setCases(data[11].iphone14pro)
    })
  },[])
  return (
    <>
      <NavBar />
        <CasesNav />
        <h1 className="phone-header">Iphone 14 Pro cases</h1>
      <div className="phone-cases-div">
        {cases.map((el, i) => {
          return <IphoneCard key={i} iphone={el} />;
        })}
      </div>
    </>
  )
}

export default Iphone14Pro
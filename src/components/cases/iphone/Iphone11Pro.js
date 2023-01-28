import React from 'react'
import NavBar from '../../NavBar'
import CasesNav from '../../CasesNav'
import IphoneCard from './IphoneCard'
import { useState,useEffect } from 'react'

function Iphone11Pro() {

  const [cases, setCases] = useState([])
  useEffect(()=>{
  
    fetch('https://raw.githubusercontent.com/allenmor/shattercase/main/db.json')
    .then(res => res.json())
    .then(data => {
      setCases(data[1].iphone11pro)
      console.log(data);
    })
  },[])
  return (
    <div>
      <NavBar />
      <CasesNav />
      <h1>Iphone X/XS/11 Pro cases</h1>
      {cases.map((el, i) => {
        return <IphoneCard key={i} iphone={el}/>
      })}
    </div>
  )
}

export default Iphone11Pro
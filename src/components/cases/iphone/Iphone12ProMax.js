import React from 'react'
import NavBar from '../../NavBar'
import CasesNav from '../../CasesNav'
import IphoneCard from './IphoneCard'
import { useState,useEffect } from 'react'

function Iphone12ProMax() {

  const [cases, setCases] = useState([])
  useEffect(()=>{
  
    fetch('https://raw.githubusercontent.com/allenmor/shattercase/main/db.json')
    .then(res => res.json())
    .then(data => {
      setCases(data[5].iphone12promax)
    })
  },[])
  return (
    <div>
      <NavBar />
      <CasesNav />
      <h1>Iphone 12 Pro Max cases</h1>
      {cases.map((el, i) => {
        return <IphoneCard key={i} iphone={el}/>
      })}
    </div>
  )
}

export default Iphone12ProMax
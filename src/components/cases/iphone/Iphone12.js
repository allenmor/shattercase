import React from 'react'
import NavBar from '../../NavBar'
import CasesNav from '../../CasesNav'
import IphoneCard from './IphoneCard'
import { useState,useEffect } from 'react'

function Iphone12() {

  const [cases, setCases] = useState([])
  useEffect(()=>{
  
    fetch('https://raw.githubusercontent.com/allenmor/shattercase/main/db.json')
    .then(res => res.json())
    .then(data => {
      setCases(data[4].iphone12)
    })
  },[])
  return (
    <div>
      <NavBar />
      <CasesNav />
      <h1>Iphone 12/ 12 Pro cases</h1>
      {cases.map((el, i) => {
        return <IphoneCard key={i} iphone={el}/>
      })}
    </div>
  )
}

export default Iphone12
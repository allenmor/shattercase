import React from 'react'
import NavBar from '../../NavBar'
import CasesNav from '../../CasesNav'
import Iphone11Card from './Iphone11Card'
import { useState,useEffect } from 'react'

function Iphone11() {

  const [cases, setCases] = useState([])
  useEffect(()=>{
  
    fetch(`${process.env.REACT_APP_JSON_URL}`)
    .then(res => res.json())
    .then(data => {
      setCases(data.iphone11)
    })
  },[])
  return (
    <div>
      <NavBar />
      <CasesNav />
      <h1>Iphone 11 cases</h1>
      {cases.map((el, i) => {
        return <Iphone11Card iphone={el}/>
      })}
    </div>
  )
}

export default Iphone11
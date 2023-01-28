import React from 'react'
import { useState, useEffect } from 'react'
import { db } from '../../../firebase'
import {collection, doc, getDocs} from 'firebase/firestore'
import NavBar from '../../NavBar'
import CasesNav from '../../CasesNav'
import Iphone11Card from './Iphone11Card'

function Iphone11() {
    const [cases, setCases] = useState([])
    const casesCollectionRef = collection(db, 'iphone11')
    useEffect(()=>{
      const getCases = async() => {
        const data = await getDocs(casesCollectionRef)
        // setCases(data.docs.map((doc) => ({...doc.data()})))
        console.log(data.docs.map((doc) => ({...doc.data()})));
        setCases(data.docs.map((doc) => ({...doc.data()})))
      }
      getCases()
    },[])
  return (
    <div>
      <NavBar />
      <CasesNav />
      {cases.map((el, i) => {
        return <Iphone11Card iphone={el}/>
      })}
    </div>
  )
}

export default Iphone11
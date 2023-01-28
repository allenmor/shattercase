import React from 'react'
import { useNavigate } from 'react-router-dom'

function CasesNav() {

    const navigate = useNavigate()

    function handleIphone11(){
        navigate('/iphone11')
    }
    function handleIphone11Pro(){
        navigate('/iphone11pro')
    }
    function handleIphone11ProMax(){
        navigate('/iphone11promax')
    }
    function handleIphone12Mini(){
        navigate('/iphone12mini')
    }
    function handleIphone12(){
        navigate('/iphone12')
    }
    function handleIphone12ProMax(){
        navigate('/iphone12promax')
    }
  return (
    <div>
        <p className='cases-nav-links' onClick={handleIphone11}>Iphone 11 </p>
        <p className='cases-nav-links' onClick={handleIphone11Pro}>Iphone 11 Pro</p>
        <p className='cases-nav-links' onClick={handleIphone11ProMax}>Iphone 11 Pro Max</p>
        <p className='cases-nav-links' onClick={handleIphone12Mini}>Iphone 12 Mini</p>
        <p className='cases-nav-links' onClick={handleIphone12}>Iphone 12/ 12 Pro</p>
        <p className='cases-nav-links' onClick={handleIphone12ProMax}>Iphone 12 Pro Max</p>
    </div>
  )
}

export default CasesNav
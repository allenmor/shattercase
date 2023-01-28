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
  return (
    <div>
        <p className='cases-nav-links' onClick={handleIphone11}>Iphone 11 Cases</p>
        <p className='cases-nav-links' onClick={handleIphone11Pro}>Iphone 11 Pro Cases</p>
        <p className='cases-nav-links' onClick={handleIphone11ProMax}>Iphone 11 Pro Max Cases</p>
    </div>
  )
}

export default CasesNav
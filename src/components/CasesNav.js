import React from 'react'
import { useNavigate } from 'react-router-dom'

function CasesNav() {

    const navigate = useNavigate()

    function handleIphone11(){
        navigate('/iphone11')
    }
  return (
    <div>
        <p className='cases-nav-links' onClick={handleIphone11}>Iphone 11 Cases</p>
    </div>
  )
}

export default CasesNav
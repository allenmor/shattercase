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
    function handleIphone13Mini(){
        navigate('/iphone13mini')
    }
    function handleIphone13(){
        navigate('/iphone13')
    }
    function handleIphone13ProMax(){
        navigate('/iphone13promax')
    }
    function handleIphone14(){
        navigate('/iphone14')
    }
    function handleIphone14Plus(){
        navigate('/iphone14Plus')
    }
    function handleIphone14Pro(){
        navigate('/iphone14pro')
    }
    function handleIphone14ProMax(){
        navigate('/iphone14promax')
    }
  return (
    <div className='models-div'>
        <p className='cases-nav-links' onClick={handleIphone11}>Iphone 11 </p>
        <p className='cases-nav-links' onClick={handleIphone11Pro}>Iphone 11 Pro</p>
        <p className='cases-nav-links' onClick={handleIphone11ProMax}>Iphone 11 Pro Max</p>
        <p className='cases-nav-links' onClick={handleIphone12Mini}>Iphone 12 Mini</p>
        <p className='cases-nav-links' onClick={handleIphone12}>Iphone 12/ 12 Pro</p>
        <p className='cases-nav-links' onClick={handleIphone12ProMax}>Iphone 12 Pro Max</p>
        <p className='cases-nav-links' onClick={handleIphone13Mini}>Iphone 13 Mini</p>
        <p className='cases-nav-links' onClick={handleIphone13}>Iphone 13</p>
        <p className='cases-nav-links' onClick={handleIphone13ProMax}>Iphone 13 Pro Max</p>
        <p className='cases-nav-links' onClick={handleIphone14}>Iphone 14</p>
        <p className='cases-nav-links' onClick={handleIphone14Plus}>Iphone 14 Plus</p>
        <p className='cases-nav-links' onClick={handleIphone14Pro}>Iphone 14 Pro</p>
        <p className='cases-nav-links' onClick={handleIphone14ProMax}>Iphone 14 Pro Max</p>
    </div>
  )
}

export default CasesNav
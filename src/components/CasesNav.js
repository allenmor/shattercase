import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function CasesNav() {
    const location = useLocation();
    const [selected, setSelected] = useState(localStorage.getItem('selected') || "iphone11");
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem('selected', selected)
    }, [selected])

    useEffect(() => {
        const pathname = location.pathname.substring(1);
        setSelected(pathname);
        localStorage.setItem('selected', pathname)
    }, [location])

    function handleChange(e) {
        const value = e.target.value;
        setSelected(value);
        localStorage.setItem('selected', value);
          navigate('/', { state: {data: value} });
      }
    

    return (
        <div className='models-div'>
            <h4>Choose Your Device</h4>
            <select value={selected} onChange={handleChange}>
                <option value="seven">7/8</option>
                <option value="eightplus">7/8 Plus</option>
                <option value="x">X/XS</option>
                <option value="xsmax">XS Maxs</option>
                <option value="iphone11">Iphone 11</option>
                <option value="iphone11pro">Iphone 11 Pro</option>
                <option value="iphone11promax">Iphone 11 Pro Max</option>
                <option value="mini12">Iphone 12 Mini</option>
                <option value="iphone12">Iphone 12/ 12 Pro</option>
                <option value="iphone12promax">Iphone 12 Pro Max</option>
                <option value="iphone13mini">Iphone 13 Mini</option>
                <option value="iphone13">Iphone 13</option>
                <option value="iphone13promax">Iphone 13 Pro Max</option>
                <option value="iphone14">Iphone 14</option>
                <option value="iphone14plus">Iphone 14 Plus</option>
                <option value="iphone14pro">Iphone 14 Pro</option>
                <option value="iphone14promax">Iphone 14 Pro Max</option>
            </select>
        </div>
    )
}

export default CasesNav

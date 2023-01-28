import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CasesNav() {
    const [selected, setSelected] = useState(localStorage.getItem('selected') || "iphone11");
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem('selected', selected)
    }, [selected])

    function handleChange(e) {
        navigate(`/${e.target.value}`)
        setSelected(e.target.value);
        localStorage.setItem('selected', e.target.value)
    }
    

    return (
        <div className='models-div'>
            <h4>Choose Your Device</h4>
            <select value={selected} onChange={handleChange}>
                <option value="iphone11">Iphone 11</option>
                <option value="iphone11pro">Iphone 11 Pro</option>
                <option value="iphone11promax">Iphone 11 Pro Max</option>
                <option value="iphone12mini">Iphone 12 Mini</option>
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

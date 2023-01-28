import React from 'react'

function Iphone11Card({iphone}) {
    console.log(iphone.imgSrc);
  return (
    <div>
        <h1>Iphone 11 Cases</h1>
        <img src={iphone.image} />
        <p>{iphone.title}</p>
        <p>{iphone.price}</p>
    </div>
  )
}

export default Iphone11Card

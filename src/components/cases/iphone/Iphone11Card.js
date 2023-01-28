import React from 'react'

function Iphone11Card({iphone}) {

  return (
    <div>
        <img alt='iphone11' src={iphone.imgSrc} />
        <p>{iphone.item}</p>
        <p>{iphone.price}</p>
    </div>
  )
}

export default Iphone11Card

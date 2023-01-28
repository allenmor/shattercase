import React from 'react'

function IphoneCard({iphone}) {

  return (
    <div>
        <img alt='iphone11' src={iphone.imgSrc} />
        <p>{iphone.item}</p>
        <p>{iphone.price}</p>
    </div>
  )
}

export default IphoneCard

import React from 'react'

function IphoneCard({iphone}) {

  let price = iphone.price.replace("$", "");
let total = price * 3;

  return (
    <div className='phone-card-div'>
        <img alt='iphone11' src={iphone.imgSrc} />
        <p>{iphone.item}</p>
        <p>${total}</p>
    </div>
  )
}

export default IphoneCard 

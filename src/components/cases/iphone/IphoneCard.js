import React from 'react'

function IphoneCard({iphone}) {

  let price = iphone.price.replace("$", "");
  let total = price * 5;

  if (iphone.item.includes("Pack") || iphone.item.includes("Lot") || iphone.item.includes("pcs")) {
    return null;
  }
    // round up to the nearest 0.99
    total = Math.ceil(total * 100) / 100;
    if (total % 1 !== 0) {
      total = Math.floor(total) + 0.99;
    }
    if (iphone.item.includes('HiTechFix')) {
      iphone.item = iphone.item.replace('HiTechFix', '');
    }
    
  return (
    <div className='phone-card-div'>
        <img alt='iphone11' src={iphone.imgSrc} />
        <p className='case-description'>{iphone.item}</p>
        <p className='price-description'>${total.toFixed(2)}</p>
    </div>
  )
}

export default IphoneCard 

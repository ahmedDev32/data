import React from 'react'

const ChangePrice = ({processedPrice,qty}) => {
    console.log(processedPrice,qty);
    const cleanPrice = parseFloat(processedPrice.replace(/\$/g, ""));
    console.log(cleanPrice,qty);

  return (
    <div>{(cleanPrice*qty).toFixed(2)}</div>
  )
}

export default ChangePrice
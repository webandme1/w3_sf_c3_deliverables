import React from 'react'
import PriceInput from './PriceInput/PriceInput'
import { useState } from 'react'

function Price() {
  const [amount,SetAmount] = useState(0);
  const onChangeHandler = (val) => {
    SetAmount(val);
  }
  return (
    <>
      <div>Price</div>
      <div>Amount : {amount}</div>
      <PriceInput label="Price" value={amount} onChange={onChangeHandler}/>
    </>
  )
}

export default Price
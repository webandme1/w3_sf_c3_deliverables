import React from 'react'

function PriceInput({label, val, onChange}) {
    const onChangeEventHandler = (event) => {
        onChange(event.target.value);
    }
  return (
    <>
        <div>{label}</div>
        <div>
            <input type="Number" value={val} onChange={onChangeEventHandler}></input>
        </div>
    </>
  )
}

export default PriceInput
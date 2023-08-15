import React from 'react'
import { useState } from 'react';
import './Counter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faRepeat } from '@fortawesome/free-solid-svg-icons'

function Counter() {
    const initialValues = {
        name: 'Fruits',
        count: 0,
      };
    const [product, setProduct] = useState(initialValues);
    
    const handlerPlus = () => {
        setProduct(prevProduct => {
            return { 
                ...prevProduct,
                count: prevProduct.count + 1 
              }
          }); 
    };
    const handlerMinus = () => {
        setProduct(prevProduct => {
            return { 
                ...prevProduct,
                count: prevProduct.count > 0 ? prevProduct.count - 1 :  prevProduct.count
              }
        });
    };
    const handlerReset = () => {
        setProduct(() => {
            return initialValues;
        });
    }
    return (
    <div className='parentContainer'>
        <div className='childContainer'>
            <h1>Counter</h1>
            <h2>{product.name}</h2>
            <button onClick={handlerMinus}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <span>{product.count}</span>
            <button onClick={handlerPlus}>
                 <FontAwesomeIcon icon={faPlus} />
            </button>
            <div>
                <button onClick={handlerReset}>
                <FontAwesomeIcon icon={faRepeat} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Counter;
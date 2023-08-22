import styles from './Product1.module.css'

import { useState } from 'react';
import Button from '../Button/Button1';
import Input from '../Input/Input1';

function Product() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState('Banana');
  const [price, setPrice] = useState(2.99);
  
  const handlerPlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };
  const handlerMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      if (count < 0) return 0;
      return count;
    });
  };

  const handlerChangeName = (value) => {
    setName(value);
  };
  const handlerChangePrice = (value) => {
    setPrice(value);
  };
  const handlerAddProduct = () => {
    console.log('handlerAddProduct');
  }


  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.counter}>
        <Button label='➖' onClick={handlerMinus} />
        <span className={styles.count}>{count}</span>
        <Button label='➕' onClick={handlerPlus} />
      </div>
      <div className={styles.price}>{`$ ${price}`} each</div>
      <div className={styles.discount}>{`Discount: ${discount}%`}</div>
      <div className={styles.form}>
        <Input value={name} label='Product Name' onChange={handlerChangeName} />
        <Input value={price} label='Price' onChange={handlerChangePrice} />
      </div>
      <Button label='Add Product' onClick={handlerAddProduct} />
    </div>
  );
}
export default Product;
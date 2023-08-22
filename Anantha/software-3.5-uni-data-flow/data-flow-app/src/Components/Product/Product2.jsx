import { useState } from 'react';

import styles from './Product1.module.css'
import Card from '../Card/Card';
import ViewList from '../ViewList/ViewList';

function Product() {
  const [count, setCount] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState('Banana');
  const [price, setPrice] = useState(2.99);

  const [list, setList] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  
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
    console.log('handlerAddProduct: name, price: ', name, price);
    
    // Create new list item
    const newItem = {
      name: name,
      quantity: count,
      price: price,
      discount: discount,
      totalWithDiscount: count * price * (100-discount)/100,
      totalWithoutDiscount: count * price,
   } 
   
   // Copy previous list and append new item to its end
   const newList = [...list, newItem];
   console.log('  newList:', newList);
   setList(newList);

   // Add the item total to the running listTotal
   const sum = sumTotal + newItem.totalWithDiscount;
   const savings = totalSavings +  (newItem.totalWithoutDiscount - newItem.totalWithDiscount);
   console.log('  sumTotal:', sumTotal);
   setSumTotal(sum);
   setTotalSavings(savings);
  }

  return (
    <div className={styles.container}>
      <Card
        name={name}
        count={count}
        price={price}
        discount={discount}
        handlerMinus={handlerMinus}
        handlerPlus={handlerPlus}
        handlerChangeName={handlerChangeName}
        handlerChangePrice={handlerChangePrice}
        handlerAddProduct={handlerAddProduct}
      />
      <ViewList list={list} sum={sumTotal} savings={totalSavings} />
    </div>
  );
}
export default Product;
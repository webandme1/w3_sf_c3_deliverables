import { useContext } from 'react';

import styles from './Product.module.css'
import Card from './Card';
import ViewList from './ViewList';

import ProductContext from './../context/ProductContext';

function Product() {
  const ctx = useContext(ProductContext);

  return (
    <div className={styles.container}>
      <Card />
      <ViewList list={ctx.list} sum={ctx.sumTotal} />
    </div>
  );
}
export default Product;

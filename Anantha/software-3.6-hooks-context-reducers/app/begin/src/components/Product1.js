import { useReducer } from 'react';

import styles from './Product.module.css'
import Card from './Card';
import ViewList from './ViewList';

import { productReducer, defaultProduct} from './../reducers/ProductReducer';

function Product() {

  const [state, dispatch] = useReducer(productReducer, defaultProduct);
  
  const handlerPlus = () => {
    dispatch({ type: 'PLUS_COUNT' });
  };
  const handlerMinus = () => {
    dispatch({ type: 'MINUS_COUNT' });
  };

  const handlerChangeName = (value) => {
    dispatch({ type: 'SET_NAME', name: value });
  };
  const handlerChangePrice = (value) => {
    dispatch({ type: 'SET_PRICE', price: value });;
  };
  const handlerAddProduct = () => {
    dispatch({ type: 'ADD_PRODUCT'});;
  }

  return (
    <div className={styles.container}>
      <Card
        name={state.name}
        count={state.count}
        price={state.price}
        discount={state.discount}
        handlerMinus={handlerMinus}
        handlerPlus={handlerPlus}
        handlerChangeName={handlerChangeName}
        handlerChangePrice={handlerChangePrice}
        handlerAddProduct={handlerAddProduct}
      />
      <ViewList list={state.list} sum={state.sumTotal} />
    </div>
  );
}
export default Product;

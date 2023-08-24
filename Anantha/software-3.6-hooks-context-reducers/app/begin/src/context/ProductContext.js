import { createContext, useReducer } from 'react';
import { defaultProduct, productReducer } from '../reducers/ProductReducer';

const ProductContext = createContext();

export function ProductProvider({ children }) {
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
      dispatch({ type: 'SET_PRICE', price: value });
    };

    const handlerAddProduct = () => {
        if(state.count == 0)
        {
          alert("Quantity must be greater than zero.");
          return;
        }

        dispatch({ type: 'ADD_PRODUCT' });
    }
  
    const context = {
      count: state.count,
      discount: state.discount,
      name: state.name,
      price: state.price,
      list: state.list,
      total: state.total,
      sumTotal: state.sumTotal,     
      handlerPlus: handlerPlus,
      handlerMinus: handlerMinus,
      handlerChangeName: handlerChangeName,
      handlerChangePrice: handlerChangePrice,
      handlerAddProduct: handlerAddProduct
    }
    
    return (
      <ProductContext.Provider value={context}>
        {children}
      </ProductContext.Provider>
    )
  }
  export default ProductContext;
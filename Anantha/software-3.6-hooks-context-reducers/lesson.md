## Brief

### Preparation

Fork and clone the [lesson repo](https://github.com/su-w3-bootcamp/6m-software-2.6-context-reducers.git) from GitHub. Go to the `app` folder and copy the `begin` sub-folder into a working folder, e.g. `work`. Change into your work folder and start the React app.

```
cd work
npm start
```

### Lesson Overview

For most general use cases, managing state with the `useState` hook is sufficient, as it is easy to implement with little code overhead. As your project grows bigger and becomes more complex, relying solely on `useState` for state management may introduce code bloat and you might end up with *spaghetti code*.

In this chapter, we will look at alternative methods for managing state in React components: reducers and context. Each method solves particular shortcomings of `useState` and can be applied individually or together. 

Part 1 describes how to refactor the `Product` component from using `useState` to applying `useReducer` and Part 2 applies `useContext`. Compare the original and final implementation to see how reducers and context help can improve your code. 

---

## Part 1 - Introduction to Reducers
- Similar to useState hook
- Allows complex state management logic

| State | Reducer |
|---|---|
| `const [state, setState] = useState(initialState)` | `const [state, dispatchFunc] = useReducer(reducerFunc, initState, ...)` | 
| Main state management tool | Advanced state management tool |
| Independent data and states | Related data and states |
| Limited state updates | Complex state updates |
| De-centralised states functions | Centralised state functions |

### Step 1: Create Reducer Function

Create a new folder `src\reducers` and create a new file `ProductReducers.js`, where it will export two objects:
- Default product parameters
- Reducer function, `productReducer(state, action)`

```js
// ProductReducers.js
export const defaultProduct = {
  count: 1,
  discount: 0,
  name: 'Bananas',
  price: 2.99
}

export function productReducer(state, action) {
  ...
}
```

The reducer function accepts two arguments, the current `state` and the `action` to be taken. The reducer will calculate and return the next state. React will store the next state, renders the component and updates the UI.

Actions can be of any user-defined form. Conventionally, we pass objects with a `type` property to identify to action. Once in the reducer function, the `action.type` supplied will determine how a new state is calculated and returned the caller function. The conditional branching can be achieved in code with a `switch` statement.

```js
// ProductReducer.js
export function productReducer(state, action) {
  switch (action.type) {
    ...
  }
}
```

Next, we port the state management functions from `Product.js` into the reducer function by moving following state variables `count`, `discount`, `name` and `price`. 

Let's start with the `handlerPlus` function which sets the `count` and `discount` state variables. 

```js
// Product (original code)
const handlerPlus = () => {
  setCount((prevCount) => {
    let count = prevCount + 1;
    if (count >= 5) {
      setDiscount(20);
    }
    return count;
  });
};
```

We define the `action.type` for the above actions as 'PLUS_COUNT' (or any other descriptive constant):

```js
// ProductReducer.js 
export function productReducer(state, action) {
  switch (action.type) {
    case 'PLUS_COUNT': {
      let newState = { ...state };  // Copy the previous state
      newState.count = state.count + 1;
      if (newState.count >= 5) {
        newState.discount = 20;
      }
      return newState;  // Return the new updated state
    }
  }
  default:
    throw Error('productReducer - unknown action:', action.type);
}
```

In the reducer function, we must create a copy of the previous state object *before* making any changes to its properties, because the incoming state object is **immutable**. We can copy the state with the ES6 object spread operator `{...}`. Once the state calculations are completed, the reducer function returns with a new state object. 

### Step 2: Add a Reducer to a Component

Call `useReducer` at the top-level `Product` component.

```js
// Product.js
import { useReducer } from 'react';
import { productReducer, defaultProduct } from '../reducers/ProductReducers';

function Product() {
  const [state, dispatch] = useReducer(productReducer, defaultProduct);
  ...
}
```

Since most of the state handling logic has moved the reducer function, we will use the `dispatch` function to trigger the action.

```js
// Product.js
const handlerPlus = () => {
  dispatch({ type: 'PLUS_COUNT' });
}
```

Finally, we update the JSX to show the reducer's state object properties (e.g. `state.count`), instead of the original state variables.

```js
// Product.js
return (
  <div>
    <Card
      ...
      count={state.count}
      discount={state.discount}
      ...
    >
  </div>
...
```
You can now test the '+' button functionality. 

As an exercise, port the rest of the handlers into the reducer function on your own.

### Step 3: Passing Arguments to a Reducer Function

A reducer function can receive any number of arguments via `action` properties. For example, to pass `name` to `productReducer`, the caller function will pass a second parameter via `dispatch`:

```js
// Product.js
const handlerChangeName = (value) => {
  dispatch({ type: 'SET_NAME', name: value })
}
```

In the reducer function, the `name` property is received in the `action` object:

```js
// ProductReducer.js
case 'SET_NAME': {
  return {...state, name: action.name }
} 
```

## Part 2 - Introduction to Context

In a React application, data is passed top-down, from parent --> child via props. Imagine a component tree with several layers of child components with a parent component at the top that holds the state variables as the *single source of truth*. If a child component at the bottom of the tree requires access to a state variable stored in the top-level component, the data has to be passed through each component layer as a props. Double the props if two-way data binding is required! This situation is called *prop-drilling*.

![Prop drilling](./assets/prop-drilling.jpg)

A solution to the prop-drilling problem is to use a global context provider that stores data that is accessible to any component without having to traverse the component tree.

In this section, we will refactor `Product` and its component tree to use context as 'global' store for its data and handler functions.

### Step 1: Create Context Provider

Create a new folder `src\context` and add a new file `ProductContext.js` where you will add the context object, define and export `ProductProvider` and `ProductContext` functions. 

```js
// ProductContext.js
import { createContext } from 'react';
const ProductContext = createContext();

export function ProductProvider({ children }) {
  ...   
}

export default ProductContext;
```

Note that the `ProductProvider` function will accept a special prop called `children` which takes in any child components that wrapped inside `ProductProvider`. We will use this component in the next step to provide access to the product context 'consumers'. 

### Step 1a: Import Reducer Function

> You may skip this step if are not using reducer functions to manage state

Before we can define the context in `ProductProvider`, we must import the reducer function that we created previously, as this is where the state variables and handler functions are stored. Port the reducer function calls from `Product.js` into `ProductContext.js`: 

```js
// ProductContext.js
import { createContext, useReducer } from 'react';
import { defaultProduct, productReducer } from '../reducers/ProductReducer';

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
    dispatch({ type: 'SET_PRICE', price: value });;
  };
  ...  
```

### Step 1b: Create Context Object

Complete the product context provider by defining the actual states that you want to store in the context component and pass it to the `ProductContext.Provider` object as a `value` prop:

```js
// ProductContext.js
...
export function ProductProvider({ children }) {
  ...
  const context = {
    count: state.count,
    discount: state.discount,
    name: state.name,
    price: state.price,
    handlerPlus: handlerPlus,
    handlerMinus: handlerMinus,
    handlerChangeName: handlerChangeName,
    handlerChangePrice: handlerChangePrice
  }   
  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  )
  ...
```

### Step 3: Add Context Provider to Top-Level Component

In order to provide access to the context services, we must now wrap the exported `ProductProvider` into the top-level component where all the 'consumer' child components will be found. In this project, we will wrap the 'App.js' component as the parent and provide context access to `Product` and all its sub-components.

```js
// App.js
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
  ...
    <ProductProvider>
      <Product />
    </ProductProvider>
...     

```
 
> To the top-level component, `ProductProvider` is a short form of `ProductContext.Provider` 

### Step 3: Apply the `useContext` Hook

Once the context provider is ready, the child `Product` and its own children has access to `ProductContext` via the `useContext` hook. 

Refactor `Product.js` to use context:

```js
// Product.js
import { useState, useContext } from 'react';
import ProductContext from '../context/ProductContext';

function Product() {
  
  // Replace useReducer --> useContext
  //
  // const [state, dispatch] = useReducer(productReducer, defaultProduct);
  
  const ctx = useContext(ProductContext);

  // Remove all handlers functions as they have been moved to ProductContext
  //
  // const handlerPlus = () => {
  // const handlerMinus  ...
  // const handlerChangeName ... 
  // const handlerChangePrice ...
  
  // Rename all references to state --> ctx object 

  const handlerAddProduct = () => {
    const newItem = {
      name: ctx.name,
      quantity: ctx.count,
      price: ctx.price,
      discount: ctx.discount,
      total: ctx.count * ctx.price * (100-ctx.discount)/100,
    } 
  ...
  // Remove all props that have been moved to the context 

  return (
    <div className={styles.container}>
      <Card
        handlerAddProduct={handlerAddProduct}
      />
      <ViewList list={list} sum={sumTotal} />
    </div>    
  )
  export default Product;

```

### Wrapup
- useReducer solves the issue of having multiple states that are related and handler functions that manipulate said states
- useContext solves the issue of prop-drilling by having a common context for all the components
- Note that you can create applications without useReducer or useContext
- These hooks are used for complex applications as needed.

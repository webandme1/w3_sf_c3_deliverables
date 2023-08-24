export const defaultProduct = {
    count       : 0,
    discount    : 0,
    name        : 'Banana',
    price       : 2.99,
    list        : [],
    total       : 0,
    sumTotal    : 0     
}

export function productReducer(state, action){
    switch (action.type) {
        case 'PLUS_COUNT': {
            let newState = {...state};
            newState.count = state.count + 1;
            if (newState.count >= 5) {
            newState.discount = 20;
            }
            return newState; 
        }   
        
    case 'MINUS_COUNT':{
            let newState = {...state};
            newState.count = state.count - 1;
            if (newState.count < 5) {
              newState.discount = 0;
            }
            if (newState.count < 0)
              newState.count = 0;
            return newState; 
        }

        case 'SET_NAME':{
            return {...state, name: action.name }
        }
        case 'SET_PRICE':{
            return {...state, price: action.price }
        } 
        case 'ADD_PRODUCT':{
            let newState = {...state};
            
            // Create new list item
            const newItem = {
              name: state.name,
              count: state.count,
              price: state.price,
              discount: state.discount,
              total: state.count * state.price * (100-state.discount)/100,
           } 
           
           // Copy previous list and append new item to its end
           const newList = [...state.list, newItem];
           newState.list = newList;
        
           // Add the item total to the running listTotal
           const sum = state.sumTotal + newItem.total;
           newState.sumTotal = sum;
           return newState;
          }  
        default:
            throw Error('productReducer: unknown action:' + action.type);
    }
}
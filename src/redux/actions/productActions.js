import { ActionTypes } from '../constants/actionTypes';

export const setProducts = (products) => {
    // return a plain js object
    return {
        type: ActionTypes.SET_PRODUCTS, // key of action
        payload: products,  // result/data of action
  };
};

export const selectedProduct = (product) => {
    // return a plain js object
    return {
        type: ActionTypes.SELECTED_PRODUCT, // key of action
        payload: product,  // result/data of action
  };
};

export const removeSelectedProduct = () => {
  // return a plain js object
  return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT, // key of action
};
};
//NC
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './productComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';
// useSelector is to fetch products from redux store

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch(); // will dispatch the response.data
  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => console.log('Error: ', err));
    dispatch(setProducts(response.data)); // this will be passed to action and it will return a js object with type and data, the object will be taken by the reducer and it will return a new state
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log('Products:', products);
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
// NC
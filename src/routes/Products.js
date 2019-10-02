import React, { useEffect } from 'react';
import ProductList from '../components/ProductList';
import { useSelector, useDispatch } from 'dva';

// https://react-redux.js.org/next/api/hooks

export default function Products() {
  console.info(`useDispatch: `, useDispatch);
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  useEffect(() => {
    dispatch({
      type: 'products/fetch',
    });
  },[]);
  const handleDelete = id => {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  };
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
}

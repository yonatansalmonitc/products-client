import { useEffect, useContext } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import { ProductsContext } from '../context/ProductsContext';
import { AuthContext } from '../context/AuthContext';

const ProductsPage = () => {

  return (
    <>
      <div className='ProductsPage'>
        <h1>Products Page</h1>
        <ProductForm />
        <hr />
        <ProductList />
      </div>
    </>
  );
};

export default ProductsPage;

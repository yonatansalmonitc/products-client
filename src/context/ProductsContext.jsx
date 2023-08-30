import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);

  const { token } = useContext(AuthContext);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:8080/products', {withCredentials: true});
      setProductsList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addProduct = async (newProduct) => {
    try {
      const res = await axios.post('http://localhost:8080/products', newProduct, {withCredentials: true});
      console.log(res.data);
      const newProductsList = [...productsList, res.data];
      setProductsList(newProductsList);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const res = await axios.delete(`http://localhost:8080/products/${productId}`, {withCredentials: true});
      if (res.data.ok) {
        const deletedArray = productsList.filter((product) => product.id != productId);
        setProductsList(deletedArray);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editProduct = async (editedProduct) => {
    try {
      const res = await axios.put(`http://localhost:8080/products/${editedProduct.id}`, editedProduct);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductsContext.Provider value={{ productsList, setProductsList, addProduct, deleteProduct, fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext };
export default ProductsContextProvider;

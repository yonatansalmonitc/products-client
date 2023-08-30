import { useEffect, useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ProductsContext } from '../context/ProductsContext';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [productImage, setProductImage] = useState('')
  
  const { addProduct } = useContext(ProductsContext);

  // useEffect(() => {
  //  console.log(productImage)
  // }, [productImage])

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = new FormData()
     newProduct.append('productImage', productImage)
     newProduct.append('name', name)
     newProduct.append('price', price)


    // const newProductObj = {
    //   name: name,
    //   price: price,
    // };
    // for(let key in newProductObj) {
    //   newProduct.append(key, newProductObj[key])
    // }

    addProduct(newProduct);

    setName('');
    setPrice('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='productName'>
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' value={name} onChange={(e) => setName(e.target.value)} required />
      </Form.Group>
      <Form.Group controlId='productPrice'>
        <Form.Label>Price</Form.Label>
        <Form.Control type='number' step='0.01' value={price} onChange={(e) => setPrice(e.target.value)} required />
      </Form.Group>
      <Form.Group controlId='productPrice'>
        <Form.Label>Image</Form.Label>
        <Form.Control type='file'  onChange={(e) => setProductImage(e.target.files[0])} required />
      </Form.Group>
      <Button variant='primary' type='submit' className='AddBtn'>
        Add Product
      </Button>
    </Form>
  );
};

export default ProductForm;

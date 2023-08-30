import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
const EditForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');


  return (
    <Form className='EditForm'>
      <Form.Group controlId='productName'>
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' value={name} onChange={(e) => setName(e.target.value)} required />
      </Form.Group>
      <Form.Group controlId='productPrice'>
        <Form.Label>Price</Form.Label>
        <Form.Control type='number' step='0.01' value={price} onChange={(e) => setPrice(e.target.value)} required />
      </Form.Group>
      <Button variant='success' type='submit' className='AddBtn'>
        Edit Product
      </Button>
    </Form>
  );
};

export default EditForm;

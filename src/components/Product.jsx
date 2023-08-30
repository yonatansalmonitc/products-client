import { useState, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import EditForm from './EditForm';
import { ProductsContext } from '../context/ProductsContext';
import { useNavigate } from 'react-router-dom';


const Product = ({ product }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { deleteProduct } = useContext(ProductsContext);
  const navigate = useNavigate()

  const handleDeleteProduct = (e) => {
    e.stopPropagation()
    deleteProduct(product.id);
  };

  return (
    <>
      {isEdit ? (
        <EditForm />
      ) : (
        <Card className='ProductContainer' style={{cursor: 'pointer'}} onClick={() => navigate(`/product/${product.id}`) }>
          <span className='DeleteBtn' onClick={handleDeleteProduct}>
            &times;
          </span>
          <Card.Body>
            <Card.Title>{product?.name}</Card.Title>
            <Card.Text>${product?.price}</Card.Text>
            <div className='buttons'>
              <Button className='EditBtn' variant='success' onClick={() => setIsEdit(true)} style={{ marginLeft: '1rem' }}>
                Edit
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default Product;

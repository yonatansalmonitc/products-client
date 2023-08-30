import { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from './Product';
import { ProductsContext } from '../context/ProductsContext';

const ProductList = () => {
  const { productsList, fetchProducts } = useContext(ProductsContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <Row>
        {productsList.map((product) => (
          <Col key={product.id} md={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;

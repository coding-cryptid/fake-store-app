import { Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: '200px', objectFit: 'contain', padding: '1rem' }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title style={{ fontSize: '0.9rem' }}>{product.title}</Card.Title>
          <Card.Text className="text-success fw-bold">${product.price}</Card.Text>
          <Button
            variant="primary"
            className="mt-auto"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            View Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
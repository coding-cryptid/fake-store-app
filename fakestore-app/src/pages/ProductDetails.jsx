import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(() => setError('Failed to load product details.'))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="border" />
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="mt-4">
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }

    return (
        <Container className="mt-4">
            <Row>
                <Col md={4} className="text-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{ maxHeight: '350px', objectFit: 'contain' }}
                    />
                </Col>
                <Col md={8}>
                    <h2>{product.title}</h2>
                    <p className="text-muted text-capitalize">Category: {product.category}</p>
                    <p>{product.description}</p>
                    <h4 className="text-success">${product.price}</h4>

                    <div className="d-flex gap-2 mt-4">
                        <Button variant="success">Add to Cart</Button>
                        <Button variant="warning" onClick={() => navigate(`/edit-product/${id}`)}>
                            Edit
                        </Button>
                        <Button variant="danger">Delete</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetails;
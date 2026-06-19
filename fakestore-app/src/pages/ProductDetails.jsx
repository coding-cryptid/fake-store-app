import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Spinner, Alert, Modal} from 'react-bootstrap';
import axios from 'axios';

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(() => setError('Failed to load product details.'))
            .finally(() => setLoading(false));
    }, [id]);

    const handleDelete = () => {
        setDeleting(true);
        setDeleteError(null);
        axios.delete(`https://fakestoreapi.com/products/${id}`)
            .then(() => navigate('/products'))
            .catch(() => {
                setDeleteError('Failed to delete product. Please try again.');
                setDeleting(false);
            });
    };

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

                    {deleteError && <Alert variant="danger">{deleteError}</Alert>}

                    <div className="d-flex gap-2 mt-4">
                        <Button variant="success">Add to Cart</Button>
                        <Button variant="warning" onClick={() => navigate(`/edit-product/${id}`)}>
                            Edit
                        </Button>
                        <Button variant="danger" onClick={() => setShowModal(true)}>
                            Delete
                        </Button>
                    </div>
                </Col>
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete <strong>{product.title}</strong>? This action cannot be undone.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)} disabled={deleting}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete} disabled={deleting}>
                        {deleting ? <Spinner animation="border" size="sm" /> : 'Delete'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default ProductDetails;
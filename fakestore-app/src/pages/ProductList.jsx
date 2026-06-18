import { useEffect, useState } from 'react';
import { Container, Row, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data))
            .catch(() => setError("Failed to load products. Please try again later."))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="border" />
            </Container>
        );
    }

    if (error) {
        return (
            <Container className='mt-4'>
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }

    return (
        <Container className='mt-4'>
            <h2 className='mb-4'>Our Products</h2>
            <Row>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Row>
        </Container>
    );
}

export default ProductList;
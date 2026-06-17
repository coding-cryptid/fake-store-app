import { useEffect, useState } from 'react';
import { Container, Row, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function ProductList() {
    const [products, setProducts] = UseState([]);
    const [loading, SetLoading] = useState(true);
    const [error, SetError] = UseState(null);
}

useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => setProducts(res.data))
    .catch(() => setError("Failed to load products. Please try again later."))
    .finally(() => setLoading(false));
}, []);

export default ProductList;
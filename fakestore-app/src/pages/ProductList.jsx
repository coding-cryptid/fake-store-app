import { useEffect, useState } from 'react';
import { Container, Row, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function ProductList() {
    const [products, setProducts] = UseState([]);
    const [loading, SetLoading] = useState(true);
    const [error, SetError] = UseState(null);
}

export default ProductList;
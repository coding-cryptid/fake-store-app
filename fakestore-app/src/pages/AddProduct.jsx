import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function AddProduct() {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
        category: ''
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        axios.post('https://fakestoreapi.com/products', formData)
            .then(() => setSuccess(true))
            .catch(() => setError('Failed to add product. Please try again.'))
    }
}
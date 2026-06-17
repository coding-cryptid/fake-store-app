import { Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Container className="text-centermt-5">
            <h1>Welcome to the Fake Store</h1>
            <p>Explore our wide range of products and enjoy shopping!</p>
            <Button as={Link} to="/products" variant="primary">Shop Now</Button>
        </Container>
    );
}

export default Home;
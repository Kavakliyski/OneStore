
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

import { getAuth, signOut } from 'firebase/auth';

// styles
import {
    Wrapper,
    NavigationBar,
} from './Navbar.styles';
import { Button } from 'react-bootstrap';

export const NavBar = () => {

    const auth = getAuth();


    return (

        <Wrapper>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Link to="/"><Navbar.Brand>OneStore</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/newarrivals">Нови артикули</Link></Nav.Link>
                            <Nav.Link><Link to="/outlet">OUTLET</Link></Nav.Link>
                            <NavDropdown title="Продукти" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="">Тениски</NavDropdown.Item>
                                <NavDropdown.Item href="">Якета</NavDropdown.Item>
                                <NavDropdown.Item href="">Чорапи</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="">
                                    Други
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Link to="/login"><Button>Влез в профила</Button></Link>
                            <Button onClick={() => { signOut(auth); }}>Sign out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Wrapper>


    );
};



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';


import { getAuth, signOut } from 'firebase/auth';

// styles
import {
    Wrapper,
    NavigationLink,
} from './Navbar.styles';
import { Button } from 'react-bootstrap';

export const NavBar = () => {

    const auth = getAuth();


    return (

        <Wrapper>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand> OneStore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><NavigationLink to="/newarrivals">Нови артикули</NavigationLink></Nav.Link>
                            <Nav.Link><NavigationLink to="/outlet">OUTLET</NavigationLink></Nav.Link>
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
                            <NavigationLink to="/login"><Button>Влез в профила</Button></NavigationLink>
                            <NavigationLink><Button onClick={() => { signOut(auth); }}>Sign out</Button></NavigationLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </Wrapper >


    );
};


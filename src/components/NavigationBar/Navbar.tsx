
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

import { getAuth, signOut } from 'firebase/auth';

// styles
import { Wrapper } from './Navbar.styles';
import { Button } from 'react-bootstrap';

export const NavBar = () => {

    const auth = getAuth();


    return (

        <Wrapper>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="">Company logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>Нови артикули</Nav.Link>
                            <Nav.Link href="">OUTLET</Nav.Link>
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
                            {/* <Nav.Link><Link to="/login">Влез в профила</Link></Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                        <Button onClick={() => { signOut(auth); }}>Sign out</Button>
                </Container>
            </Navbar>
        </Wrapper>
    );
};


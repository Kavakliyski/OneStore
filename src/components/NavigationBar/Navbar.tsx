
// bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';

// rrd6
import { Link } from 'react-router-dom';

// firebase
import { getAuth, signOut } from 'firebase/auth';

// components
import { SignedInLinks } from './SignedInLinks';
import { LoggedOutLinks } from './LoggedOutLinks';

// styles
import {
    Wrapper,
    NavigationLink,
} from './Navbar.styles';
import { NavbarCart } from './NavbarCart';


export const NavBar = () => {

    const auth = getAuth();

    let user = auth.currentUser;
    console.log("user " + user);
    console.log("user " + user);

    return (

        <Wrapper>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand as={Link} to="/">OneStore</Navbar.Brand>

                    <NavbarCart />

                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavigationLink} to="/newarrivals">Нови артикули</Nav.Link>
                            <Nav.Link as={NavigationLink} to="/outlet">OUTLET</Nav.Link>
                            <NavDropdown title="Продукти" id="collasible-nav-dropdown" style={{ padding: "3px" }}>
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
                            <SignedInLinks />
                            <LoggedOutLinks />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </Wrapper >


    );
};


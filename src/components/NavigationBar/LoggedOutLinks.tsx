import { Button } from "react-bootstrap";
import { NavigationLink } from "./Navbar.styles";

export const LoggedOutLinks = () => {
    return (
        <>
            <NavigationLink to="/login">
                <Button>Влез в профила</Button>
            </NavigationLink>
        </>
    )
}

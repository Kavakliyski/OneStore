import { Button } from "react-bootstrap";
import { NavigationLink } from "./Navbar.styles";

export const SignedInLinks = () => {
    return (

        <>

            <NavigationLink to="">
                <Button>Sign out</Button>
            </NavigationLink>
        </>


    )
}

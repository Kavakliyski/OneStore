import { Button } from "react-bootstrap";
import { NavigationLink } from "./Navbar.styles";

export const SignedInLinks = () => {
    return (
        //         {!user && 
        // }

        <>
            <h3>Добре дошъл, </h3>
            <NavigationLink to="">
                <Button>Sign out</Button>
            </NavigationLink>
        </>


    )
}

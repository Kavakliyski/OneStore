
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

export const LoginComponent = () => {

    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then(response => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setAuthing(false);
            })
    }

    return (
        <>
            <Form style={{
                padding: "200px",
                paddingLeft: "600px",
                paddingRight: "600px",
            }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Button variant="primary" type="submit">
                        Влез
                    </Button>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Button variant="primary" type="submit" onClick={() => signInWithGoogle()} disabled={authing}>
                        Влез с Google
                    </Button>
                </Form.Group>
                <h2>Нямаш профил... <Link to="/register">Натисти тук!</Link></h2>
            </Form>
        </>
    )
}

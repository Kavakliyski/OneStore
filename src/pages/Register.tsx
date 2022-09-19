
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const Register = () => {

    const [registering, setRegistering] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const navigate = useNavigate();
    const auth = getAuth();

    const signUpWithEmailAndPassword = () => {
        if (password !== confirmPassword) setError('passwords not matching');

        if (error !== '') setError('');

        setRegistering(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                navigate('/login');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (error.code.includes('auth/weak-passowrd')) {
                    setError('Моля напишете по-силна парола');
                } else if (error.code.inccludes('auth/email-already-in-use')) {
                    setError('Имейлът вече e използван')
                } else {
                    setError('unable to register.. please try again');
                }

                setRegistering(false);
            });
    };

    return (
        <>
            <Form style={{
                padding: "200px",
                paddingLeft: "600px",
                paddingRight: "600px",
            }}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Имейл адрес</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasiUsername">
                    <Form.Label>Потребилтеско име</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Създай парола</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Label>Потвърди парола</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                
                <h2>Вече имаш профил... <Link to="/login">Натисни тук!</Link></h2>
            </Form>
        </>
    )
}

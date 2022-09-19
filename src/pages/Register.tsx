
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import ErrorText from '../utils/ErrorText';

import { WrapperLogReg } from '../styles/LoginRegister.styles'

export const Register = () => {

    const [registering, setRegistering] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
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
                
                if(errorCode === 'auth/invalid-email'){
                    setError('Невалиден имейл адрес');
                }

                console.log('====================================');
                console.log(errorCode);
                console.log(errorMessage);
                console.log('====================================');

                setRegistering(false);
            });
    };

    return (
        <WrapperLogReg>
            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Имейл адрес</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Създай парола</Form.Label>
                    <Form.Control
                        autoComplete="new-password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">

                    <Form.Label>Потвърди парола</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)} />
                </Form.Group>

                <Button
                    disabled={registering}
                    variant="success"
                    type="submit"
                    onClick={() => signUpWithEmailAndPassword()}
                >
                    Submit
                </Button>

                <ErrorText error={error} />
                <h3>Вече имаш профил... <Link to="/login">Натисни тук!</Link></h3>
            </Form>
        </WrapperLogReg>
    )
}

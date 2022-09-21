
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

export interface IAuthRouteProps { };

const AuthRoute = () => {

    // const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AuthCheck();
        return () => AuthCheck();
    }, [auth]);

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoading(false);
        } else {
            console.log('unauthorized');
            navigate('/login');

        }
    });

    if (loading) {

        return <div>Loading...</div>
    }

    return
    <>
        asd
    </>
};

export default AuthRoute;

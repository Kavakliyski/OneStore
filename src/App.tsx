
// firebase
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from './config/firebase.config'

// styles
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// react-router-dom
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

// components
import { NavBar } from './components/NavigationBar/Navbar'

// pages
import AuthRoute from './components/AuthRoute';
import { Home } from './pages/Home'
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Notfound } from './pages/Notfound';
import { Outlet } from './pages/Outlet';
import { Newarrivals } from './pages/Newarrivals';

// routes
import routes from "./config/routes"

export const firebase = initializeApp(firebaseConfig.firebaseConfig);
const analytics = getAnalytics(firebase);

function App() {


    return (

        <div className="App">

            <BrowserRouter>

                <NavBar />

                <Routes>
                    {/* <Route path="/" element={<AuthRoute><Home /></AuthRoute>} /> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/outlet" element={<Outlet />} />
                    <Route path="/newarrivals" element={<Newarrivals />} />


                    <Route path="*" element={<Notfound />} />

                    {routes.map((route, index) =>
                        <Route
                            key={index}
                            path={route.path}
                            element={route.element}
                        />
                    )}

                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App

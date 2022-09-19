
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
import { Home } from './pages/Home'
import { Register } from './pages/Register';
import { Login } from './pages/Login';


export const firebase = initializeApp(firebaseConfig.firebaseConfig);
const analytics = getAnalytics(firebase);

function App() {

    return (
        <div className="App">

            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />

                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App

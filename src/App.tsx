import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import { NavBar } from './components/NavigationBar/Navbar'

// pages
import { Home } from './pages/Home'

function App() {

    return (
        <div className="App">
            <NavBar />
            {/* <ImageComponent /> */}
            <Home />
        </div>
    )
}

export default App

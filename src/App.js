import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './components/style.css';
import Footer from './components/Footer';
import OpenMovie from "./components/OpenMovie";
import Register from "./components/Register";
import Login from "./components/Login";
import AddMovie from "./components/AddMovie";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import MovieDescription from "./components/MovieDescription";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<OpenMovie/>}/>
                    <Route path="/signup" element={<Register/>}/>
                    <Route path="/signin" element={<Login/>}/>
                    <Route path="/description/:id" element={<MovieDescription/>}/>
                    <Route path="/add" element={<AddMovie/>}/>
                </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    );
}
export default App;

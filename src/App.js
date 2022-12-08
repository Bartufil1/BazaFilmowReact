import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title';
import './components/style.css';
import Movie from './components/Movie';
import Footer from './components/Footer';
import OpenMovie from "./components/OpenMovie";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Title/>
                <Routes>
                    <Route path="/" element={<OpenMovie/>}/>
                </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    );
}
export default App;

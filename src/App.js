import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./components/style.css";
import Footer from "./components/Footer";
import OpenMovie from "./components/OpenMovie";
import Register from "./components/Register";
import Login from "./components/Login";
import AddMovie from "./components/AddMovie";
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import MovieDescription from "./components/MovieDescription";
import { isExpired, decodeToken } from "react-jwt";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<OpenMovie />} />
          <Route exact path="/signin" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route path="/description/:id" element={<MovieDescription />} />
          <Route
            exact
            path="/add"
            element={
              isExpired(localStorage.getItem("token")) ? (
                <Navigate replace to="/" />
              ) : (
                <AddMovie />
              )
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;

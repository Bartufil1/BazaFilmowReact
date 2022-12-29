import React, { Component } from 'react';

import Search from './Search';
import {Link} from "react-router-dom";
const Navbar=() =>{

    return(
        <div className="header" >
            <div className="searchDiv">
        <nav>
            <div className="logoCointainer">
                <img src="images/movie.png" className="poster1"></img>
                <Link to="/" style={{textDecoration:"none",color:"orange"}}>
                    <li className='logoLink'>Filmowo </li>
                </Link>
            </div>
        </nav>
                <Search/>
                <Link to="/add">
                    <button type="button" className="btn addMovie">Dodaj Film</button>
                </Link>
            </div>
            <div className="logRegButton">
            <Link to="/signin">
                <button type="button" className="btn login">Logowanie</button>
            </Link>
            <Link to="/signup">
                <button type="button" className="btn register">Rejestracja</button>
            </Link>
        </div>
        </div>
    )
}
export default Navbar;


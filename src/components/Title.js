import React, { Component } from 'react';
import Login from './Login';
import Search from './Search';
import {Link} from "react-router-dom";
const Title=() =>{

    return(
        <div className="header" >
        <nav>
            <div className="logoCointainer">
                <img src="images/movie.png" className="poster1"></img>
                <Link to="/" style={{textDecoration:"none",color:"orange"}}>
                    <li> <a href='#' className='logoLink'>Filmowo</a> </li>
                </Link>
            </div>
        </nav>
            <Search/>
            <Login/>
        </div>
    )
}
export default Title;


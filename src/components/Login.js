import React, { Component } from 'react';
import {Link} from "react-router-dom";
const Login=() =>{

    return(
        <div>
            <Link to="/Login">
                <button type="button" className="btn login">Zaloguj</button>
            </Link>
        </div>
    )
}
export default Login;

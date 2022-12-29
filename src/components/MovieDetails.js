import React, { Component } from 'react';
import {Link} from "react-router-dom";

const MovieDetails=() =>{

    return(
        <div className="buttonDetails">
            <Link to="/description/1">
                <button type="button" className="btn movieDetails">Więcej</button>
            </Link>
        </div>
    )
}
export default MovieDetails;

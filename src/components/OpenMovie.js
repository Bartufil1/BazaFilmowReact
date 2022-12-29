import React, { Component } from 'react';
import Movie from "./Movie";
import MovieText from "./MovieText";
import MarkMovie from "./MarkMovie";
import data from "../Data";
import MovieDetails from "./MovieDetails";

const OpenMovie =()=>{
const data2=data

    return (
        <div className="filmsCointainer">
            {
            data.map((data, index)=>{
                return(
                    <div className="filmCointainer" key={index}>
                        <Movie/>
                        <div className="movieData">
                            <MovieText/>
                            <MovieDetails/>
                            <MarkMovie/>
                        </div>
                    </div>

                )
            } )
        }
        </div>
);
}
export default OpenMovie;

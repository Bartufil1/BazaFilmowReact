import React, { Component } from 'react';
import Movie from "./Movie";
import MovieText from "./MovieText";
import MarkMovie from "./MarkMovie";
import data from "../Data";

const OpenMovie =()=>{
const data2=data

    return (
        <div className="filmsCointainer">
            {
            data.map((data, index)=>{
                return(
                    <div className="filmCointainer">
                        <Movie/>
                        <div className="movieData">
                            <MovieText/>
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

import React from 'react'


const MovieList = ({ onAddMovie = () => {}}) => (
    
        <div style={{cursor:'pointer',fontSize:60, textAlign:"center",background:"green",padding:'10px',margin:10,border:"2px black solid", width: "500px",height:"100px"}}
            className="new-movie-card"
            onClick={() => {
                onAddMovie({
                id:Math.random(),
                img:prompt('movie image: '),
                title: prompt('movie title: '),
               
            })}} >
            +
        </div>
     
)

export default MovieList
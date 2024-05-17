import { useState, useEffect } from "react";
export default function MoviesList(){
    const [movies, setMovies] = useState([]);
    useEffect(async () => {
        const reponse = await fetch("api/movies")
        const movies = await reponse.json()
    }, [])
    return(
        <div>
            <h1>Movies List</h1>
            <ul>
                {movies.map(movie => {
                    return(
                    <li key={movie.id}>{movie.releaseYear}</li>
                    );
                })}
            </ul>
        </div>
    )
}
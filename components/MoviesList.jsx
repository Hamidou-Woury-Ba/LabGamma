import { useState, useEffect } from "react";
export default function MoviesList(){
    const [movies, setMovies] = useState([]);
    useEffect(async () => {
        const reponse = await fetch("api/movies")
        const movies = await reponse.json()
        setMovies(movies)
    }, [])
    return(
        <div className="p-10">
            <h1 className="text-lg">Movies List</h1>
            <ul>
                {movies.map(movie => {
                    return(
                    <li key={movie.id}>
                        {movie.title} - {movie.releaseYear}
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}
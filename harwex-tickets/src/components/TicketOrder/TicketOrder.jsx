import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMovies } from "../../redux/slices/moviesSclise";
const TicketOrder = () => {
    const { movieId } = useParams();

    const movies = useSelector(selectMovies);

    const [movie, setMovie] = useState(undefined);

    useEffect(() => {
        const movie = movies.find((movie) => movie.id === Number(movieId));
        setMovie(movie ?? undefined);
    }, [movieId, movies]);

    return (
        <>
            {movie ? (
                <>
                    <p>{movie.name}</p>
                    <p>{movie.duration}</p>
                    <p>{movie.genre}</p>
                    <p>{movie.startDate}</p>
                    <p>{movie.endDate}</p>
                </>
            ) : (
                "hello"
            )}
        </>
    );
};

export default TicketOrder;

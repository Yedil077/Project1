import { Link } from "../styles/MoviesListStyles";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types"

export const MoviesList = ({ movies }) => {
    const location = useLocation();
 
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location}} >
                        {movie.original_title}
                    </Link>
                </li>
            ))}
        </ul>   
    )
}

MoviesList.propTypes = {
    movies: PropTypes.array
}
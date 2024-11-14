import { useEffect, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { getDetails } from "services/api";
import clsx from "clsx"
import css from '../styles/MoviesDetails.module.css'
import { ErrorBoundary } from "components/ErrorBoundaries";

const posterPad = 'https://image.tmdb.org/t/p/w300'

const AdditionalInfo = () => {

    return (
        <>
         <div className={clsx(css.container, css.additional)}>
            <p>Additional information</p>
            <ul>
                <li><Link to="cast">Cast</Link></li>
                <li><Link to="reviews">Reviews</Link></li>
            </ul>
        </div>
        <Outlet />
        </>
       
    )
}

const MoviesDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [score, setScore] = useState('')
    const [overview, setOverview] = useState('')
    const [genres, setGenres] = useState('')
    const [poster, setPoster] = useState('')
    const [loc] = useState(prevState => location.state?.from ?? prevState)
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        getDetails(id)
            .then(response => {
                setTitle(response.original_title);
                setYear(response.release_date.slice(0, 4));
                setScore(Math.round(response.vote_average * 10))
                setOverview(response.overview)
                setGenres(response.genres.map(genre => genre.name).join(' '))
                setPoster(() => {
                    const poster = response.poster_path;
                    if(!poster) {
                        return 'https://via.placeholder.com/300x450?text=No+poster+available';
                    } else {
                    return posterPad + response.poster_path
                    }
                })
                setLoader(false)
            })
    }, [id])
    
    const backLinkHref = location.state?.from ?? loc;

    return (
        <>
        <ErrorBoundary>
            <div className={css.container}>
                <Link to={backLinkHref}  className={css.goback}>← Go Back</Link>
                <div className={css.details}>
                    <img className={css.img} src={poster} alt={title} />
                    <div className={css.info}>
                        <h3>{title} ({year})</h3>
                        <p>User Score: {score}%</p>
                        <h4>Overview</h4>
                        <p>{overview}</p>
                        <h4>Genres</h4>
                        <p>{genres}</p>
                    </div>
                </div>
            </div>
            {loader && <h3>Loading ...</h3>}
            <AdditionalInfo variant="additional"/>
        </ErrorBoundary>
        </>       
    )
}

export default MoviesDetails
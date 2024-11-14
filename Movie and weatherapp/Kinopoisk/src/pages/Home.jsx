import { useState, useEffect } from "react";
import { MoviesList } from "components/MoviesList";
import { Notification } from "components/Notification";
import { getTrending } from "services/api";
import { ErrorBoundary } from "components/ErrorBoundaries";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [notification, setNotification] = useState('')
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        getTrending()
            .then(response => {
                setMovies(response)
                setNotification('')
                setLoader(false)
            } )
            .catch(() => {
                setNotification('Something went wrong')
                setLoader(false)
            })
    }, [])

    return (
    
        <div className="container">
            <h2>Trending today</h2>
            <ErrorBoundary >
            <MoviesList movies={movies}/>
            <Notification notification={notification} />
            {loader && <h3>Loading ...</h3>}
            </ErrorBoundary>
        </div>
       
    )
}

export default Home
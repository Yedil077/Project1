import { MoviesList } from "components/MoviesList"
import { useEffect, useState } from "react"
import { getMovies } from "services/api"
import { Notification } from "components/Notification"
import { useSearchParams } from "react-router-dom"
import { Input } from "components/SearchForm"
import { ErrorBoundary } from "components/ErrorBoundaries";


const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name') ?? "";
    const [movies, setMovies] = useState([])
    const [notification, setNotification] = useState('')
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        getMovies(name)
            .then(response => {
                setMovies(response)
                setLoader(false)
                //setSearchParams({ name: keyword})    
            })
            .catch(() => {
                setNotification("Something went wrong")
                setLoader(false)
            })
    }, [name])

    const onSubmit = (evt) => {
        setLoader(true)
        evt.preventDefault();
        const keyword = evt.currentTarget.elements.movie.value;
        getMovies(keyword)
            .then(response => {
            if (response.length === 0) {
                setNotification("No match")
                setMovies([])
                setLoader(false)
            } else {
                setMovies(response)
                setNotification("")
                setLoader(false)
                //setSearchParams({ name: keyword})
            }
            })
            .catch(() => {
                setNotification("Something went wrong")
                setLoader(false)
            })
    }

    const onChange = name => {
        const nextParams = name !== '' ? { name } : {};
        setSearchParams(nextParams)
    }

    return (
        <div className="container">
            <ErrorBoundary>
                <Input onSubmit={onSubmit} onChange={onChange}/>
                <MoviesList movies={movies}/>
                <Notification notification={notification} />
                {loader && <h3>Loading ...</h3>}
            </ErrorBoundary>
        </div>
    )
}

export default Movies
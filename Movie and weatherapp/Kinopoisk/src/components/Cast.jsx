import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getCast } from "services/api"
import css from '../styles/cast.module.css'
import PropTypes from "prop-types"

/// CastItem --------

const imge_path = 'https://image.tmdb.org/t/p/w200'

const CastItem = ({ image, name, character }) => {
    let photo;

    const photopad = () => {
        if(!image) {
            photo = 'https://via.placeholder.com/200x300?text=No+poster+available';
            return
        } else {
            photo = imge_path + image;
        }
    }

    photopad();
    return(
        <>
            <img src={photo} alt={name}/>
            <p className={css.p}>{name}</p>
            <p className={css.p}>as {character}</p>
        </>
    )
}

CastItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string
}


// CastList --------------------

const CastList = ( {cast} ) => {
    return(
        <ul className={css.cast}>
            {cast.map(actor => <li className={css.actor} key={actor.id}>
                <CastItem name={actor.name} image={actor.profile_path} character={actor.character} />
                </li>)}
        </ul>
    )
}

CastList.propTypes = {
    cast: PropTypes.array
}


// Cast ---------------------------

const Cast = () => {
    const {id} = useParams();
    const [cast, setCast] = useState([]);
    const [anyCast, setAnyCast] = useState('');

    useEffect(() => {
        setAnyCast("Loading ...")
        getCast(id)
            .then(response => {
                if (response.length === 0) {
                    setAnyCast("We don't have any cast for this movie")
                } else {
                    setCast(response);
                    setAnyCast('');
                }
            })
            .catch(() => setAnyCast("Something went wrong"))
    }, [id])

    return (
        <div className={css.container}>
            <p className={css.anycast}>{anyCast}</p>
            <CastList cast={cast}/>
        </div>
    )
}

export default Cast

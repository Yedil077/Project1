import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "services/api"
import css from "../styles/Reviews.module.css"
import PropTypes from "prop-types"


// Review Item -----

const Review = ({author, content}) => {
    return(
        <>
            <h4>Author: {author}</h4>
            <p className={css.p}>{content}</p>
        </>
    )
}

Review.propTypes = {
    author: PropTypes.string,
    content: PropTypes.string
}

// ReviewList ----------------------

const ReviewsList = ({reviews}) => {
    return(
        <ul>
            {reviews.map(review => <li key={review.id}>
                    <Review author={review.author} content={review.content}/>
                 </li>
            )} 
        </ul>
    )
}

ReviewsList.propTypes = {
    reviews: PropTypes.array
}

// Reviews --------------------

const Reviews = () => {
    const {id} = useParams()
   
    const [reviews, setReviews] = useState([])
    const [anyReviews, setAnyReviews] = useState('')


    useEffect(() => {
        setAnyReviews("Loading...")
        getReviews(id)
            .then(response =>{
                //console.log('response', response)
                if (response.length === 0) {
                    setAnyReviews("We don't have any reviews for this movie.")
                } else {
                    setAnyReviews('')
                    setReviews(response)
                }
            })
            .catch(() => setAnyReviews("Something went wrong"))

    }, [id])


    return (
        <div className="container">
            <p>{anyReviews}</p>
            <ReviewsList reviews={reviews}/>
        </div>
    )
}

export default Reviews
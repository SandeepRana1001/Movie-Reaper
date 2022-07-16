import React from "react";
import LinkButton from "../link_button/LinkButton";
import './MovieCard.css'

const MovieCard = (props) => {

    return (

        <div className="card">
            <div className='img-container'>
                <img src={`${props.image}`} className="card-img-top image" alt={props.title} />
            </div>
            <div className="overlay">
                <div className='mt-5'>
                    <i className="fa-solid fa-star themeColor"></i>
                    {props.rating && <h5 className="card-title">{props.rating} / 10</h5>}
                    <p className="card-text">{props.genre_1}</p>
                    <p className="card-text">{props.genre_2}</p>
                    {props.rating && <LinkButton title='View Details' link={`/movies/${props.id}`} />}
                    {!props.rating && <LinkButton title='Upcoming' link='/#' />}

                </div>
            </div>
            <div className="card-footer">
                <h5> {props.title}</h5>
            </div>
        </div>

    )
}

export default MovieCard
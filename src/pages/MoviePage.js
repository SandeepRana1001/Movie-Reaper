import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import './MoviePage.css';
const MoviePage = () => {
    const movies = useSelector(state => state.all_movies)
    const id = useParams().movieId;
    const this_movie = movies.find((movie) => {
        return movie.id.toString() === id.toString()
    })
    console.log(this_movie)

    return (
        <section className='moviePage background'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 '>
                        <div className='img_holder'>
                            <img src={`${this_movie.image}`} />

                        </div>
                    </div>

                    <div className='col-lg-7 '>
                        <div className='container '>
                            <h3 className='movie-heading'>{this_movie.title}</h3>
                            <p>Action/Something</p>
                            <p> Rating : <span> {this_movie.rating} </span></p>
                            <p>Avalable In :  <span className='available'>720p</span> <span className='available'>1080p</span>  </p>
                            <a href="https://www.pcworld.com/wp-content/uploads/2021/09/thinkstockphotos-463187437-100584391-orig.jpg?quality=50&strip=all" target='_blank' className='available subs' download>
                                <span>
                                    <i className="fa-solid fa-download"></i>
                                </span>
                                <span>
                                    Request Subtitles
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-5 mt-3 '>
                        <div class=" container d-grid">
                            <button class="btn btn-primary" type="button">
                                <span>

                                    <i className="fa-solid fa-download"></i>
                                </span>
                                <span>
                                    Download
                                </span>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default MoviePage;
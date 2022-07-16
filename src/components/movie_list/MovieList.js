import React, { useEffect, useState } from "react";
import MovieCard from "../global/movie_card/MovieCard";

const MovieList = (props) => {

    const object = props.object
    const [loading, setLoading] = useState(true);
    const style = {
        backgroundColor: props.color,
        // 'border': '1px solid red',
    }

    useEffect(() => {
        if (props.object) {
            props.object.length > 0 ? setLoading(false) : setLoading(true)
        }
    }, [props.object])


    return (
        <section className={props.title} style={style}>
            <div className="container ">
                <div>
                    <h2 className='text-center heading'>
                        <a href='/#' className="heading_links">

                            {props.title}
                        </a>
                    </h2>

                </div>
                <div className="row">
                    {
                        !loading &&

                        object.map((obj) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-2 col-2" key={obj.id}>
                                    <MovieCard
                                        id={obj.id}
                                        image={obj.image}
                                        title={obj.title}
                                        rating={obj.rating}
                                        genre_1={obj.genre_1}
                                        genre_2={obj.genre_2}
                                    />
                                </div>
                            )
                        })

                    }

                </div>
            </div>
        </section >
    )
}
export default MovieList
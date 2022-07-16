import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Banner from "../components/banner/Banner";
import MovieList from "../components/movie_list/MovieList";
import { POPULAR } from "../actions";


const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(POPULAR())
    }, [])
    const popular = useSelector(state => state.popular)



    const latest = [
        {
            id: '1',
            title: 'Shang-Chi and The Legend of The Ten Rings',
            image: 'shang_chi.jpg',
            rating: '7.8',
            genre_1: 'Action',
            genre_2: 'Superhero'

        },
        {
            id: '2',
            title: 'Venom: Let There Be Carnage',
            image: 'Venom_2.jpg',
            rating: '8.4',
            genre_1: 'Action',
            genre_2: 'Superhero'


        },
        {
            id: '3',
            title: 'Spiderman: No Way Home',
            image: 'No_way_home.jpg',
            rating: '7.5',
            genre_1: 'Action',
            genre_2: 'Superhero'


        },
        {
            id: '4',
            title: 'The Batman',
            image: 'Batman.jpg',
            rating: '7.3',
            genre_1: 'Action',
            genre_2: 'Superhero'

        }
    ]

    const upcoming = [
        {
            id: '1',
            title: 'Black_Adam',
            image: 'black_adam.jpg',
            rating: '',
            genre_1: '',
            genre_2: ''

        },
        {
            id: '2',
            title: 'Thor Love and Thunder',
            image: 'thor.jpg',
            rating: '',
            genre_1: '',
            genre_2: ''


        },
        {
            id: '3',
            title: 'DC League of Super-Pet',
            image: 'super_pet.jpg',
            rating: '',
            genre_1: '',
            genre_2: ''
        }
    ]
    return (
        <div>
            <Banner />
            <MovieList
                title='Popular Downloads'
                color="#1d1d1d"
                object={popular}
            />

            {/* <MovieList
                    title='Latest Movies'
                    color="#171717"
                    object={latest}
                />

                <MovieList
                    title='Upcoming Movies'
                    color="#1d1d1d"
                    object={upcoming}
                /> */}

        </div>
    )
}

export default Home
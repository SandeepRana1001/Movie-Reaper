import { v4 as uuidv4 } from 'uuid';
const initialState = [
    {//0
        id: 1,
        title: 'Captain America : Civil War',
        image: 'https://wallpapercave.com/wp/wp10093602.jpg',
        rating: 7.8,
        genre_1: 'Action',
        genre_2: 'Superhero'

    },
    {//1
        id: 2,
        title: 'Avengers: Endgame',
        image: 'https://wallpaperaccess.com/full/1089112.jpg',
        rating: 10.0,
        genre_1: 'Action',
        genre_2: 'Superhero'


    },
    {//2
        id: 3,
        title: 'Moon Knight',
        image: 'https://m.media-amazon.com/images/M/MV5BMmNhZDlkYmQtZDM5Yy00MDE5LTg3MGEtZjEwZjlmNzExZmMwXkEyXkFqcGdeQWRvb2xpbmhk._V1_QL75_UY281_CR0,0,500,281_.jpg',
        rating: 9.9,
        genre_1: 'Action',
        genre_2: 'Superhero'


    },
    {//3
        id: 4,
        title: 'Multiverse Of Madness',
        image: 'https://wallpapercave.com/wp/wp7855517.jpg',
        rating: 9.8,
        genre_1: 'Action',
        genre_2: 'Superhero'

    },
    {//4
        id: 5,
        title: 'Shang-Chi and The Legend of The Ten Rings',
        image: 'https://wallpapercave.com/wp/wp9740595.jpg',
        rating: 9.7,
        genre_1: 'Action',
        genre_2: 'Superhero'

    },
    {//5
        id: 6,
        title: 'Venom: Let There Be Carnage',
        image: 'https://images3.alphacoders.com/117/1173669.jpg',
        rating: 8.4,
        genre_1: 'Action',
        genre_2: 'Superhero'


    },
    {//6
        id: 7,
        title: 'Spiderman: No Way Home',
        image: 'https://images2.alphacoders.com/117/1170277.jpg',
        rating: 7.5,
        genre_1: 'Action',
        genre_2: 'Superhero'


    },
    {//7
        id: 8,
        title: 'The Batman',
        image: 'https://wallpapercave.com/wp/wp10093602.jpg',
        rating: 7.5,
        genre_1: 'Action',
        genre_2: 'Superhero'

    }

];

const filter_movie = (array, field = 'rating', field_value = '0.0') => {
    let values = {
        index: 0,
        [field]: field_value
    };
    const popular = []
    for (let i = 0; i < 4; i++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i][field] > values[field]) {
                values.rating = array[i].rating
                values.index = i
            }
        }
        popular.push(...array.splice(values.index, 1))
    }
    return popular;
}

const movie_reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MOVIE': {
            let temp = {
                id: uuidv4(),
                title: action.title,
                image: action.image,
                rating: action.rating,
                genre_1: action.genre_1,
                genre_2: action.genre_2,
                date_created: action.date_created
            }
            return state.push(temp)
        }
        case 'REMOVE_MOVIE': {
            return state.filter((ele) => {
                return ele.id !== action.id
            })
        };
        case 'POPULAR': {
            const array = [...state]
            const popular = filter_movie(array);
            return popular
        }
        default: return state;
    }
}
const popular_movies = (state = initialState, action) => {
    switch (action.type) {
        case 'POPULAR': {
            const array = [...state]
            const popular = filter_movie(array);
            return popular
        }
        default: return state;
    }
}

const latest_movies = (state = initialState, action) => {
    switch (action.type) {
        case 'LATEST': {
            const array = [...state]
            const popular = filter_movie(array);
            return popular
        }
        default: return state;
    }
}


export const all_movies = movie_reducer
export const popular = popular_movies
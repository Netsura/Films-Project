import React from 'react';
import './GenresBTN.css'

const GenresBTN = ({genre}) => {
    return (
        <button className='genresBTN'>{genre.name}</button>
    );
}

export default GenresBTN;
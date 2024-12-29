import { NavLink } from 'react-router-dom'
import './Films.css'
import React from 'react'

const imgUrl = 'https://image.tmdb.org/t/p/w500'

const Films = ({ film }) => {
    return (
        <div className='filmsCard'>
            <NavLink to={`/film/${film.id}`}>
                <img src={imgUrl + film.poster_path} />
            </NavLink>
            <h3>{film.title}</h3>
            
        </div>
    )
}

export default Films
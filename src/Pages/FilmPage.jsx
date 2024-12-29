import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmsById } from '../store/slices/filmsSlice'
import { useParams } from "react-router-dom";



const FilmPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { film } = useSelector((state) => state.filmsData)
    useEffect(() => {
        dispatch(fetchFilmsById(id))
    },[id])

    return (
        <div>
            <h1>{film?.title}</h1>
        </div>
    )
}

export default FilmPage
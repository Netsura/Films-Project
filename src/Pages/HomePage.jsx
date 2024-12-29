import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Films from "../components/Films/Films";
import './HomePage.css'
import { changePage } from "../store/slices/filmsSlice";



const HomePage = () => {
    const dispatch = useDispatch()
    const { films, } = useSelector((state) => state.filmsData)
    return (
        <div>
            <div className="films">
                {
                    films.map((film) => {
                        return <Films key={film.id} film={film} />
                    })
                }
            </div>
            <div>
                <button className="btn" onClick={() => dispatch(changePage())}>More</button>
            </div>
        </div>
    )
}

export default HomePage
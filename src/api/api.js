import axios from "axios";

const apiKey = `f36f23edf6e10fd2ddcf939916b1f67a`


const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3`
});


export const filmsApi = {
    getGenres(){
    return instance.get(`/genre/movie/list?api_key=${apiKey}&language=en-US`)
        .then((res) => res.data.genres)

    },
    getFilmsByPage(pageNumber) {
        return instance.get(`/discover/movie?api_key=${apiKey}&language=en-US&page=${pageNumber}`)
            .then((res) => res.data.results)
    },
    getFilmById(id) {
        return instance.get(`/movie/${id}?api_key=${apiKey}&language=en-US`)
            .then((res) => res.data)
    },
    getFilmsBySearch(text) {
        return instance.get(`/search/movie?api_key=${apiKey}&query=${text}`)
            .then((res) => res.data.results)
    }
}
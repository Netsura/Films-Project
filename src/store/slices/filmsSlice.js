import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filmsApi } from "../../api/api";

export const fetchFilmsByPage = createAsyncThunk(
    `fetchFilmsByPage`,
    async (pageNumber) => {
        const data = await filmsApi.getFilmsByPage(pageNumber)

        return data
    }
);

export const fetchFilmsById = createAsyncThunk(
    `fetchFilmsById`,
    async (id) => {
        const data = await filmsApi.getFilmById(id)

        return data
    }
)

export const fetchFilmsBySearch = createAsyncThunk(
    `fetchFilmsBySearch`,
    async (text) => {
        const data = await filmsApi.getFilmsBySearch(text)

        return data
    }
)

const flimsSlice = createSlice({
    name: 'filmsSlice',
    initialState: {
        films: [],
        filmsSearch: [],
        film: null,
        pageNumber: 1,
        text: '',
        isFetching: false
    },
    reducers: {
        changePage(state, action) {
            state.pageNumber = state.pageNumber + 1
        },
        changeText(state, action) {
            state.text = action.payload
        }
    },
    extraReducers: {
        [fetchFilmsByPage.pending]: (state, action) => { },
        [fetchFilmsByPage.fulfilled]: (state, action) => {
            state.films = action.payload
        },
        [fetchFilmsById.fulfilled]: (state, action) => {
            state.film = action.payload
        },
        [fetchFilmsBySearch.fulfilled]: (state, action) => {
            state.filmsSearch = action.payload
        },
    }
})

export const { changePage, changeText } = flimsSlice.actions
export default flimsSlice.reducer
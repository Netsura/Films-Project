import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { filmsApi } from "../../api/api";

export const fetchGenres = createAsyncThunk(
    'fetchGenres',
    async () => {
    const data =  await filmsApi.getGenres()

    return data
    }
);

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState: {
        genres : []
    },
    reducers: {},
    extraReducers : {
        [fetchGenres.fulfilled] : (state, action) => {
            state.genres = action.payload
        }
    }
})

export default genresSlice.reducer
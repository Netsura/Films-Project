import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./slices/genresSlice";
import filmsSlice from "./slices/filmsSlice";

export const store = configureStore({
    reducer: {
        genresData: genresSlice,
        filmsData: filmsSlice
    }
})
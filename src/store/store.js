import { configureStore } from "@reduxjs/toolkit";
import movieoReducer from './movioSlice'

export const store = configureStore({
    reducer:{
        movieo: movieoReducer
    },
})
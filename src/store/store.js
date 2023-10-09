import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/Favorites";
import MoviesReducer from './slices/Movies'


const store=configureStore({
    reducer:{
        favorites:favoritesReducer,
        movies:MoviesReducer
        }
})






export default store
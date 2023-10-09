import { createSlice } from "@reduxjs/toolkit"


const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState: { favorites: [] },
  reducers: {
    addFavorite: function (state, action) {
      if(state.favorites.length == 0){
        state.favorites.push(action.payload)
      }else{
        
       if(state.favorites.find((move)=>move.id == action.payload.id)){
         state.favorites = state.favorites.filter((move)=>move.id != action.payload.id)
      }else{
         state.favorites.push(action.payload)
       }
      }
    },
    removeFavorite:  function (state, action) {
      state.favorites = state.favorites.filter((move)=>move.id != action.payload.id)
    }
  }
})
export const {addFavorite , removeFavorite} = favoritesSlice.actions   //{}


export default favoritesSlice.reducer

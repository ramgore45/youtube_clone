import { configureStore } from "@reduxjs/toolkit";
import globalReducer from './slices/globalSlice'
import videoReducer from './slices/videoSlice'
import searchReducer from './slices/searchSlice'

const appStore = configureStore({
    reducer:{
        global:globalReducer,
        videos:videoReducer,
        search: searchReducer
    }
})

export default appStore
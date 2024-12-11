import { configureStore } from "@reduxjs/toolkit";
import globalReducer from './slices/globalSlice'
import videoReducer from './slices/videoSlice'

const appStore = configureStore({
    reducer:{
        global:globalReducer,
        videos:videoReducer,
    }
})

export default appStore
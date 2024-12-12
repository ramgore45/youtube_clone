import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:'videos',
    initialState:{
        popularVideos:null,
        video:null,
        searchVideos:null
    },
    reducers:{
        getPopularVideos:(state, action)=>{
            state.popularVideos= action.payload
        },
        getSearchVideos:(state, action)=>{
            state.searchVideos = action.payload
        }
    }
})

export const { getPopularVideos, getSearchVideos } = videoSlice.actions

export default videoSlice.reducer
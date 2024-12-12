import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cacheResults:(state, action)=>{
            // store the results for searchQuery all of them to not call an API again again fro searches
            // remain to give the limit of 100, popup first index, store at last
            state = Object.assign(state, action.payload)
        }
    }
})

export const {cacheResults} = searchSlice.actions

export default searchSlice.reducer

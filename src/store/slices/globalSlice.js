import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name:'global',
    initialState:{
        isMenuOpen: true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false
        },
        openMenu:(state)=>{
            state.isMenuOpen = true
        }
    }
})

export const {toggleMenu, closeMenu, openMenu} = globalSlice.actions;
export default globalSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "..";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        init: false,
        title: ''
    },
    reducers: {
        setAppInitialization: (state, action: PayloadAction<boolean>) => {
            state.init = action.payload
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action: PayloadAction<any>) => {
            state.title = action.payload.appReducer.title
            
            // return {...state, ...action.payload.appReducer}
        }
    }
})

export const selectInit = (state: RootState) => state.appReducer.init
export const selectTitle = (state: RootState) => state.appReducer.title

export const {
    setAppInitialization,
    setTitle
} = appSlice.actions

export const appReducer = appSlice.reducer
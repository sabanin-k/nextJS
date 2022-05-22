import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { appReducer } from "./reducers/app";
import { postsReducer } from "./reducers/posts";

export const makeStore = () => configureStore({
    reducer: {
        appReducer,
        postsReducer,
    }
})

export const wrapper = createWrapper<Store>(makeStore)

type Store = ReturnType<typeof makeStore>
export type RootState = ReturnType<Store['getState']>
export type AppDispatch = Store['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>
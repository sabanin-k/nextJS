import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch, AppThunk, RootState } from "..";
import { TPost } from "../../types";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        fetching: false,
        error: '',
        posts: [] as TPost[]
    },
    reducers: {
        setFetching: (state) => {
            state.fetching = true
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.fetching = false
        },
        setPosts: (state, action: PayloadAction<TPost[]>) => {
            state.posts = action.payload
            state.fetching = false
        }
    }
})

export const getPosts2 = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(postsSlice.actions.setFetching())
        const res = await axios.get<TPost[]>('https://jsonplaceholder.typicode.com/posts')
        dispatch(postsSlice.actions.setPosts(res.data))
    } catch (error) {
        if (typeof error === 'string') {
            dispatch(postsSlice.actions.setError(error))
        } else if (error instanceof Error) {
            dispatch(postsSlice.actions.setError(error.message))
        }
    }
}

export const selectPosts = (state: RootState) => state.postsReducer.posts

export const postsReducer = postsSlice.reducer

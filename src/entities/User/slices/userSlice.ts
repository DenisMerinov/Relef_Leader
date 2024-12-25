import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserStateScheme } from '../model/types/user'

const initialState: UserStateScheme = {
    token: localStorage.getItem('token') || '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reducerToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
    },
    extraReducers: () => {},
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice

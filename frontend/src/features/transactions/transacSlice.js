import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import transacService from './transacService'

const initialState = {
    transacs: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const transacSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        reset: (state) => initialState
    }
})

export const {reset} = transacSlice.actions
export default transacSlice.reducer
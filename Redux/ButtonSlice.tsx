import {createSlice} from "@reduxjs/toolkit";
import {ButtonThunk} from "./ApiThunkCalls";

interface TypeInit {
    isLoading:boolean
    status:string
    error:any
    success:any
}

const initialState:TypeInit = {
    isLoading: false,
    status: "",
    error: "",
    success: Object
}

const ButtonSlice = createSlice({
    name: 'buttonSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(ButtonThunk.pending, (state) => {
            state.isLoading = true
        })
            builder.addCase(ButtonThunk.fulfilled, (state, action) => {
                state.success = action.payload
                state.status = "Success"
                state.isLoading = false
            })
        builder.addCase(ButtonThunk.rejected,(state,action) => {
            const ap = action.payload
            state.isLoading = false
            state.status = 'Error'
            state.error = ap
        })
    }
})



export default ButtonSlice.reducer
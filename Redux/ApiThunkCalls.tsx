import {createAsyncThunk} from "@reduxjs/toolkit";
import {putData} from "../query/query";
import {AxiosError} from "axios";


type ItemType = {
    name:string,
    phone:string,
    email:string,
    id:number
}

export const ButtonThunk = createAsyncThunk(
    'buttonSlice',
    async (item:ItemType,thunkAPI) => {
        try {
            return await putData(item)
        } catch (err) {
            if(err instanceof AxiosError)
                return err.response && err.response.data && thunkAPI.rejectWithValue(err.response.data.toString())
        }

    }
)
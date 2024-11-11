import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers=createAsyncThunk("user/getAllUsers",async()=>{
    const response=await axios.get("http://localhost:3000/api/v1/getallusers");
    return response.data;
})

const userSlice=createSlice({
    name:"user",
    initialState:{
        users:[],
        loading:false
    },
    
    extraReducers:(builder)=>{
        builder.addCase(getAllUsers.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(getAllUsers.fulfilled,(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        });
        builder.addCase(getAllUsers.rejected,(state,action)=>{
            state.loading=false;
        });
    }

})

export default userSlice.reducer;
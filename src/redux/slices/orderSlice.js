import { createSlice } from "@reduxjs/toolkit";

const initialState={
    displayOrder:false
}
export const orderSlice=createSlice({
    name:"order",
    initialState,
    reducers:{
     Order:(state,action)=>{
        if(action.payload==='openOrder'){
            state.displayOrder=true
        }
        if(action.payload==='closeOrder'){
            state.displayOrder=false
        }
     }
    }
}) 


export const { Order} =orderSlice.actions;
export default orderSlice.reducer;

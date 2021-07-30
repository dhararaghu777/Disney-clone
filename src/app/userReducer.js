import {createSlice} from '@reduxjs/toolkit';

const initialState={
    user:null
}

const userReducer=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload;
        },

        removeUser:(state,action)=>{
            state.user=null;
        }
    }
})

export const {setUser, removeUser}=userReducer.actions;
export default userReducer.reducer;
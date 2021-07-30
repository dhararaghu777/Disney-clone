import {createSlice} from '@reduxjs/toolkit';

const initialState={
    movies:[],
    viewMovie:null
}

const createActions=createSlice({
    name:'reducer',
    initialState,
    reducers:{
        addToStore:(state,action)=>{
            state.movies=[...action.payload];
        },

        viewMovie:(state,action)=>{
            state.viewMovie=action.payload;
        }
    }
});

export const {addToStore,viewMovie}=createActions.actions;
export default createActions.reducer;
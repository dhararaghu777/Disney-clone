import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from './moviesReducer';
import userReducer from './userReducer';

export default configureStore({
    reducer:{
        movie:moviesReducer,
        users:userReducer
    }
})
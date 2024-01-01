import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import  nowplayingAction from "./movieSlice";
import gptReducer from "./gptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
reducer : {
    user:userReducer,
    movies:nowplayingAction,
    gpt: gptReducer,
    config : configSlice,
},
})

export default appStore;
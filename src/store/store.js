import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./reducer/register.slice";
import loginReducer from "./reducer/login.slice";


export const store = configureStore({
    reducer:{
        register: registerReducer,
        login: loginReducer,
    },
    devTools: true
})
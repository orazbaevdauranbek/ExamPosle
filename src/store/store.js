import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./reducer/register.slice";
import loginReducer from "./reducer/login.slice";
import todosReducer from "./reducer/todo.slice";


export const store = configureStore({
    reducer:{
        register: registerReducer,
        todos: todosReducer,
        login: loginReducer,
    },
    devTools: true
})
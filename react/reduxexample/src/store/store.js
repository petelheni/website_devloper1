import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../Feature/TodoSlice'

export const store = configureStore({
    reducer: {
        todos: todoSlice,
        // todos: todoSlice.reducer 
    }
})
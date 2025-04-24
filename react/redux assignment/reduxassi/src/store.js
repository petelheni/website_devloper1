import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './feature/counterSlice'
import todosSlice from "./feature/todoSlice";
const store = configureStore({
    reducer: {
        count: counterSlice.reducer,
        todos: todosSlice.reducer
    }
});
export default store
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "We learn Redux" }]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, updateText } = action.payload
            const todo = state.todos.find(todo => todo.id === id)
            if (todo) {
                todo.text = updateText;
            }
        },
    }
})

export const { Addtodos } = Todoslice.actions;
export default Todoslice.reducer;
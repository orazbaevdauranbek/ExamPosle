import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    loading: false
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
			state.todos = state.todos.filter(todos => todos.id !== action.payload)
		},
        editTodo: (state, action) => {
			state.todos.map(item => {
				if (item.id === action.payload.id) {
					item.name = action.payload.title
					item.type = action.payload.category
				}
			})
		},
    }
})

export const {addTodo,removeTodo,editTodo} = todoSlice.actions
export default todoSlice.reducer
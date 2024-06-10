// TODO: todoSlice 를 작성하세요.
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name : "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({id : Date.now(), ...action.payload, isDone: false});
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleTodo : (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo){
                todo.isDone = !todo.isDone;
            }
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
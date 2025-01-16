
import { createSlice } from "@reduxjs/toolkit";

const savedTasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

const initialState = {
    tasks: savedTasks,
    filter: "all",
};

export const slice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {

            state.tasks.unshift(action.payload);
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        deleteTask: (state, action) => {
            const index = state.tasks.findIndex((t) => t.id === action.payload.id);
            if (index !== -1) {
                state.tasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(state.tasks));
            }
        },
        editTask: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload.id);
            if (task) {
                task.title = action.payload.title ?? task.title;
                task.description = action.payload.description ?? task.description;
                localStorage.setItem("tasks", JSON.stringify(state.tasks));
            }
        },
        completeTask: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload.id);
            if (task) {
                task.completed = !task.completed;
                localStorage.setItem("tasks", JSON.stringify(state.tasks));
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addTask, deleteTask, editTask, completeTask, setFilter } = slice.actions;
export default slice.reducer;

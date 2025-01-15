import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    filter: "all",
};

const slice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.unshift(action.payload);
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        completeTask: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload.id);
            if (task) {
                task.completed = !task.completed;
                localStorage.setItem("tasks", JSON.stringify(state.tasks));
            }
        },
    },
});

export const { addTask, setFilter, completeTask } = slice.actions;
export default slice.reducer;

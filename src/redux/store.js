import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slice";

const store = configureStore({
    reducer: {
        tasksReducer,
    },
});

export default store;
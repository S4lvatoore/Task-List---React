import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slice"; // Убедитесь, что путь к редюсеру верный

const store = configureStore({
    reducer: {
        tasksReducer, // Ваш редюсер
    },
});

export default store;

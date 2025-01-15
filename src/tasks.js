import { v4 as uuid } from "uuid";

export async function createTask({ title, description }) {
    const newTask = {
        id: uuid(),
        title,
        description,
        completed: false,
    };

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.unshift(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    return newTask;
}

export async function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

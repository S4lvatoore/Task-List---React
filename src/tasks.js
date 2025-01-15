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
export async function destroyTask(id) {
    const tasks = await getTasks();
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    return updatedTasks;
}
function setTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
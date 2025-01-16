import { matchSorter } from "match-sorter";
import { v4 as uuid } from "uuid";

export async function getTasks(query) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) tasks = [];
    if (query) {
        tasks = matchSorter(tasks, query, { keys: ["title", "description"] });
    }
    return tasks;
}

export async function createTask({ title = "", description = "" }) {
    if (!title) throw new Error("Title is required");

    const newTask = {
        id: uuid(),
        title,
        description,
        completed: false,
    };

    let tasks = await getTasks();
    tasks.unshift(newTask);
    setTasks(tasks);
    return newTask;
}
export async function getTask(id) {
    let tasks = await getTasks();
    let task = tasks.find((t) => t.id === id);
    return task ?? null;
}

export async function getFirstTask() {
    let tasks = await getTasks();
    return tasks[0] ?? null;
}

export async function updateTask(id, updates) {
    let tasks = await getTasks();
    let task = tasks.find((t) => t.id === id);
    if (!task) throw new Error("No task found for " + id);
    Object.assign(task, updates);
    setTasks(tasks);
    return task;
}

export async function completeTask(id) {
    let tasks = await getTasks();
    let task = tasks.find((t) => t.id === id);
    if (!task) throw new Error("No task found for " + id);
    task.completed = !task.completed;
    setTasks(tasks);
    return task;
}

export async function destroyTask(id) {
    let tasks = await getTasks();
    let index = tasks.findIndex((t) => t.id === id);
    if (index > -1) {
        tasks.splice(index, 1);
        setTasks(tasks);
        return true;
    }
    return false;
}

function setTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

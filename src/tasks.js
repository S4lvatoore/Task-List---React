import { matchSorter } from "match-sorter";

export async function getTasks(query) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) tasks = [];
    if (query) {
        tasks = matchSorter(tasks, query, { keys: ["title", "description"] });
    }
    return tasks;
}
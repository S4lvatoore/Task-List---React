import { Outlet, useLoaderData, redirect, useNavigation, } from "react-router-dom";
import NewForm from "../components/forms/NewForm";
import { matchSorter } from "match-sorter";
import TaskList from "../components/TaskList";
import {getFirstTask, getTasks} from "../tasks";
import { useSelector } from "react-redux";
import SearchForm from "../components/forms/SearchForm";
import FilterForm from "../components/forms/FilterForm";
import {useMemo, useState} from "react";

export async function action() {
    const currentTask = await getFirstTask();
    return redirect(`/tasks/${currentTask.id}/edit`);
}

export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const tasks = await getTasks();
    return { q, tasks: tasks || [] };
}


function Root() {
    const [query, setQuery] = useState("");
    const { tasks } = useSelector((state) => state.tasksReducer);

    const filteredTasks = useMemo(() => {
        if (!query.trim()) return tasks;
        return tasks.filter((task) =>
            task.title.toLowerCase().includes(query.toLowerCase())
        );
    }, [tasks, query]);

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <>
            <div id="sidebar">
                <div>
                    <FilterForm />
                    <div>
                        <input
                            type="search"
                            placeholder="Search tasks"
                            value={query}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <NewForm />
                </div>
                <nav>
                    <TaskList tasks={filteredTasks} /> {}
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}

export default Root;
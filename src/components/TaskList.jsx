import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { completeTask } from "../redux/slice";


function TaskList({onTaskClick}) {
    const { tasks, filter } = useSelector((state) => state.tasksReducer);
    const dispatch = useDispatch();

    const filteredTasks = tasks.filter((task) => {
        if (filter === "done") return task.completed;
        if (filter === "undone") return !task.completed;
        return true;
    });

    const handleToggle = (id) => {
        dispatch(completeTask({ id }));
    };

    return (
        <div className="task-list">
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <Task key={task.id} task={task} onTaskClick={onTaskClick} />
                ))
            ) : (
                <p>No tasks found.</p>
            )}
        </div>
    );
}
export default TaskList;


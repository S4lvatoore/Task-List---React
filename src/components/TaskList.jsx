import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function TaskList({ selectTask }) {
    const { tasks, filter } = useSelector((state) => state.tasksReducer);

    const filteredTasks = tasks.filter((task) => {
        if (filter === "done") return task.completed;
        if (filter === "undone") return !task.completed;
        return true;
    });

    return (
        <div className="task-list">
            {filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                    <Task key={task.id} task={task} selectTask={selectTask} />
                ))
            ) : (
                <p>No tasks available.</p>
            )}
        </div>
    );
}

export default TaskList;

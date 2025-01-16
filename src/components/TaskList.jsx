import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function TaskList({ tasks }) {

    const { filter } = useSelector((state) => state.tasksReducer);

    const filteredTasks = tasks.filter((t) => {
        if (filter === "done") return t.completed;
        if (filter === "undone") return !t.completed;
        return true;
    });

    return (
        <div className="task-list">
            {filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))
            ) : (
                <p>No tasks found.</p>
            )}
        </div>
    );
}

export default TaskList;

import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function TaskList() {
    const { tasks } = useSelector((state) => state.tasksReducer);

    return (
        <div className="task-list">
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))
            ) : (
                <p>No tasks found.</p>
            )}
        </div>
    );
}

export default TaskList;

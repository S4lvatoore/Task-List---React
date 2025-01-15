import React from "react";

function Task({ task }) {
    return (
        <div className="task">
            <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Status: {task.completed ? "Completed" : "Pending"}</p>
            </div>
        </div>
    );
}

export default Task;

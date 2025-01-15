import React from "react";

function Task({ task, onToggle }) {
    return (
        <div className="task">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            <h3>{task.title}</h3>
        </div>
    );
}

export default Task;

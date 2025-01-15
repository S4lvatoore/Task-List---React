import React from "react";

function Task({ task, onTaskClick }) {
    return (
        <div className="task" onClick={() => onTaskClick(task)}>
            <input
                type="checkbox"
                checked={task.completed}
                readOnly
                style={{ marginRight: "10px" }}
            />
            <h3>{task.title}</h3>
        </div>
    );
}

export default Task;

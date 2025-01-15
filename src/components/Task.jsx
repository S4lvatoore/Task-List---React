import React from "react";

function Task({ task, onClick }) {
    return (
        <div className="task" onClick={onClick} style={{ cursor: "pointer" }}>
            <div>
                <h3>{task.title}</h3>
            </div>
        </div>
    );
}

export default Task;

import React from "react";
import { useDispatch } from "react-redux";
import { toggleTaskCompletion, deleteTask } from "../redux/slice";

function Task({ task, selectTask }) {
    const dispatch = useDispatch();

    const handleCheckboxClick = () => {
        dispatch(toggleTaskCompletion({ id: task.id }));
    };

    const handleDeleteClick = () => {
        dispatch(deleteTask({ id: task.id }));
    };

    return (
        <div className="task" onClick={() => selectTask(task)}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleCheckboxClick}
            />
            <span>{task.title}</span>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    );
}

export default Task;

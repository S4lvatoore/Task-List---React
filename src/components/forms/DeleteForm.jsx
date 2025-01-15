import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/slice";
import { destroyTask } from "../../tasks";

function DeleteForm({ task }) {
    const dispatch = useDispatch();

    const handleDeleteClick = async (e) => {
        e.preventDefault();

        await destroyTask(task.id);
        dispatch(deleteTask({ id: task.id }));
    };

    return (
        <button onClick={handleDeleteClick} type="button" style={{ marginLeft: "10px" }}>
            Delete
        </button>
    );
}

export default DeleteForm;

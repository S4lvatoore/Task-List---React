import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slice";
import { createTask } from "../../tasks";

function AddTaskForm({ onClose }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const handleAddTask = async (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) {
            alert("Both Title and Description are required!");
            return;
        }

        const newTask = await createTask({ title, description });
        dispatch(addTask(newTask));
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Add Task</h2>
                <form onSubmit={handleAddTask}>
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Task Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <button type="submit">Add</button>
                    <button type="button" onClick={onClose}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddTaskForm;

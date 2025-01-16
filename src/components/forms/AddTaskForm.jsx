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

        if (!title.trim()) {
            alert("Title is required!");
            return;
        }

        if (!description.trim()) {
            alert("Description is required!");
            return;
        }

        const newTask = await createTask({ title, description });
        dispatch(addTask(newTask));
        onClose()
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Add New Task</h2>
                <form onSubmit={handleAddTask}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            maxLength={16}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>
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

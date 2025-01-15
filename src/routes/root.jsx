import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TaskList from "../components/TaskList";
import NewForm from "../components/forms/NewForm";

function Root() {
    const [selectedTask, setSelectedTask] = useState(null);

    const handleTaskClick = (task) => {
        setSelectedTask(task);
    };

    return (
        <div id="app">
            <div id="sidebar">
                <h1>Task Manager</h1>
                <NewForm />
                <TaskList onTaskClick={handleTaskClick} />
            </div>
            <div id="detail">
                {selectedTask ? (
                    <div>
                        <h2>{selectedTask.title}</h2>
                        <p>{selectedTask.description}</p>
                        <p>Status: {selectedTask.completed ? "Completed" : "Pending"}</p>
                    </div>
                ) : (
                    <p>Select a task to view details</p>
                )}
                <Outlet />
            </div>
        </div>
    );
}

export default Root;

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TaskList from "../components/TaskList";
import FilterForm from "../components/forms/FilterForm";
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
                <FilterForm />
                <TaskList onTaskClick={handleTaskClick} />
            </div>
            <div id="main">
                {selectedTask ? (
                    <div className="task-details">
                        <h2>{selectedTask.title}</h2>
                        <p>{selectedTask.description}</p>
                        <p>Status: {selectedTask.completed ? "Done" : "Undone"}</p>
                    </div>
                ) : (
                    <p className="no-task">Select a task to view details</p>
                )}
                <Outlet />
            </div>
        </div>
    );
}

export default Root;

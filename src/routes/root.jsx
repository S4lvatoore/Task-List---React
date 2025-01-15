import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TaskList from "../components/TaskList";
import FilterForm from "../components/forms/FilterForm";
import NewForm from "../components/forms/NewForm";

function Root() {
    const [selectedTask, setSelectedTask] = useState(null);


    return (
        <div id="app">
            <div id="sidebar">
                <h1>Task Manager</h1>
                <NewForm/>
                <FilterForm/>
                <TaskList selectTask={setSelectedTask}/>
            </div>
            <div id="main">
                {selectedTask ? (
                    <div className="task-details">
                        <h3>{selectedTask.title}</h3>
                        <p>{selectedTask.description}</p>
                        <p>Status: {selectedTask.completed ? "Completed" : "Pending"}</p>
                    </div>
                ) : (
                    <p>Select a task to see details</p>
                )}
            </div>
        </div>
    );
}

export default Root;
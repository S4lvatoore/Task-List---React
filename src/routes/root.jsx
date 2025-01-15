import React from "react";
import { Outlet } from "react-router-dom";
import TaskList from "../components/TaskList";
import NewForm from "../components/forms/NewForm";

function Root() {
    return (
        <div id="app">
            <div id="sidebar">
                <h1>Task Manager</h1>
                <NewForm />
            </div>
            <div id="main">
                <TaskList />
                <Outlet />
            </div>
        </div>
    );
}

export default Root;

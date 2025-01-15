import React from "react";
import { Outlet } from "react-router-dom";
import TaskList from "../components/TaskList";
import NewForm from "../components/forms/NewForm";
import FilterForm from "../components/forms/FilterForm"; // Импорт FilterForm



function Root() {
    return (
        <div id="app">
            <div id="sidebar">
                <h1>Task Manager</h1>
                <NewForm />
                <FilterForm />
                <TaskList />
            </div>
            <div id="main">
                <Outlet />
            </div>
        </div>
    );
}

export default Root;

import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function TaskList({ onTaskClick }) {
    const { tasks, filter } = useSelector((state) => state.tasksReducer);

    // Фильтруем задачи на основе текущего фильтра
    const filteredTasks = tasks.filter((task) => {
        if (filter === "done") return task.completed;
        if (filter === "undone") return !task.completed;
        return true; // Показываем все задачи
    });

    return (
        <div className="task-list">
            {filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                    <Task key={task.id} task={task} onTaskClick={onTaskClick} />
                ))
            ) : (
                <p>No tasks found.</p>
            )}
        </div>
    );
}

export default TaskList;

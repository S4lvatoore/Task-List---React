import React from "react";
import { useDispatch } from "react-redux";
import { completeTask } from "../redux/slice";

function Task({ task, onTaskClick }) {
    const dispatch = useDispatch();

    const handleCheckboxChange = (e) => {
        e.stopPropagation(); // Останавливаем всплытие события, чтобы оно не вызвало onTaskClick
        dispatch(completeTask({ id: task.id })); // Меняем статус задачи
    };

    return (
        <div className="task" onClick={() => onTaskClick(task)}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleCheckboxChange} // Обработчик изменения
                style={{ marginRight: "10px" }}
            />
            <h3>{task.title}</h3>
        </div>
    );
}

export default Task;

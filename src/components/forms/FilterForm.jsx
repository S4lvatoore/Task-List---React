import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/slice"; // <-- импортируем

function FilterForm() {
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        const filterValue = e.target.value; // Получаем выбранный фильтр
        dispatch(setFilter(filterValue)); // Диспатчим новый фильтр
    };

    return (
        <div id="filter-form">
            <p>
                <span>Filter tasks by status:</span>
                <br />
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="all"
                        defaultChecked
                        onChange={handleFilterChange} // Обработчик изменения
                    />
                    All
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="done"
                        onChange={handleFilterChange} // Обработчик изменения
                    />
                    Done
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="undone"
                        onChange={handleFilterChange} // Обработчик изменения
                    />
                    Undone
                </label>
            </p>
        </div>
    );
}

export default FilterForm;

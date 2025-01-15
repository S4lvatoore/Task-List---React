import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/slice";

function FilterForm() {
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        const filterValue = e.target.value;
        dispatch(setFilter(filterValue));
    };

    return (
        <div id="filter-form">
            <p>Filter tasks by status:</p>
            <label>
                <input
                    type="radio"
                    name="filter"
                    value="all"
                    defaultChecked
                    onChange={handleFilterChange}
                />
                All
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    value="done"
                    onChange={handleFilterChange}
                />
                Done
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    value="undone"
                    onChange={handleFilterChange}
                />
                Undone
            </label>
        </div>
    );
}

export default FilterForm;

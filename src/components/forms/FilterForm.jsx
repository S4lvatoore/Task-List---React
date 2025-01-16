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
            <p>
                <span>Filter tasks by status:</span>
                <br />
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
                <br />
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="done"
                        onChange={handleFilterChange}
                    />
                    Done
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="undone"
                        onChange={handleFilterChange}
                    />
                    Undone
                </label>
            </p>
        </div>
    );
}

export default FilterForm;

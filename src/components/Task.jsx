import { Form, NavLink, useFetcher } from "react-router-dom";
import { useDispatch } from "react-redux";
import { completeTask } from "../redux/slice";
import DeleteForm from "./forms/DeleteForm";

function Task({ task }) {
    return (
        <div className="task">
            <CheckBox task={task} />
            <NavLink to={`tasks/${task.id}`}>
                {task.title ? <>{task.title}</> : <i>No Title</i>}
            </NavLink>
            <Form action={`tasks/${task.id}/edit`}>
                <button type="submit">Edit</button>
            </Form>
            <DeleteForm task={task} />
        </div>
    );
}


function CheckBox({ task }) {
    const fetcher = useFetcher();
    const dispatch = useDispatch();
    let isCompleted = task.completed;

    const handleClick = (e) => {
        dispatch(completeTask({ id: task.id }));
    };

    return (
        <fetcher.Form method="post" action={`tasks/${task.id}/complete`}>
            <button
                name="isCompleted"
                value={isCompleted ? "true" : "false"}
                onClick={handleClick}
            >
                {isCompleted ? "▣" : "▢"}
            </button>
        </fetcher.Form>
    );
}

export default Task;
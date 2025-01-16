import { useLoaderData } from "react-router-dom";
import { getTask } from "../tasks";

export async function loader({ params }) {
    const task = await getTask(params.taskId);
    return { task };
}

function Task() {
    const { task } = useLoaderData();

    if (!task) {
        return <div>Задача не найдена</div>;
    }

    return (
        <div id="task">
            <div>
                {}
                <input
                    type="text"
                    readOnly
                    value={task.title || ""}
                    placeholder="No Title"
                    style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "8px",
                        width: "100%",
                    }}
                />

                {}
                <textarea
                    readOnly
                    value={task.description || ""}
                    placeholder="No Description"
                    rows={4}
                    style={{
                        width: "100%",
                    }}
                />
            </div>
        </div>
    );
}

export default Task;

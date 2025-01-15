import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";

function NewForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <button onClick={openModal}>New Task</button>
            {isModalOpen && <AddTaskForm onClose={closeModal} />}
        </>
    );
}

export default NewForm;

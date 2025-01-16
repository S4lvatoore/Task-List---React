import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";

function NewForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button onClick={handleOpenModal}>New</button>
            {isModalOpen && <AddTaskForm onClose={handleCloseModal} />}
        </>
    );
}

export default NewForm;

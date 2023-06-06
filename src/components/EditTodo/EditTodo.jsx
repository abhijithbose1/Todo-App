import React from "react";
import "./EditTodo.css";

export const EditTodo = ({ data, saveButtonClick, cancelButtonClick, handleEditChange, editTodoList }) => {
    
    const handleSaveClick = ()  => {
        saveButtonClick(data.id);
    };

    const handleCancelClick = () => {
        cancelButtonClick(data.id);
    };

    return (
        <div className="edit-todo-container">
            <input type="text" placeholder="Editing Current Todo Item" value={editTodoList} onChange={handleEditChange} />
            <button onClick={handleSaveClick}>SAVE</button>
            <button onClick={handleCancelClick} id="cancel-button">
                CANCEL
            </button>
        </div>
    );
};

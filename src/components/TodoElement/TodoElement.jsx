import React from "react";
import "./TodoElement.css";

export const TodoElement = ({ data, editButtonClick, deleteButtonClick, todoComplete }) => {
    const handleEditClick = () => {
        editButtonClick(data.id); //!since we had to pass a unique id to differentiate editTodo component.
    };

    const handleDeleteClick = () => {
        deleteButtonClick(data.id);
    };

    const handleStrike = () => {
        todoComplete(data.id);
    };

    return (
        <div className="todo-element-container">
            <p onClick={handleStrike} style={{ textDecoration: data.complete ? "line-through" : "none" }}>
                {data.id}. {data.content}
            </p>
            <div className="buttons-container">
                <button className="edit-todo-button" onClick={handleEditClick}>
                    <img src="/assets/editbutton.png" alt="" />
                </button>
                <button className="delete-todo-button" onClick={handleDeleteClick}>
                    <img src="/assets/deletebutton.png" alt="" />
                </button>
            </div>
        </div>
    );
};

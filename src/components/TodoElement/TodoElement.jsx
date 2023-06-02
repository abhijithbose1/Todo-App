import React from "react";
import "./TodoElement.css";

export const TodoElement = () => {
    return (
        <div className="todo-element-container">
            <p>This is a Todo item</p>
            <div className="buttons-container">
                <button className="edit-todo-button">
                    <img src="/assets/editbutton.png" alt="" />
                </button>
                <button className="delete-todo-button">
                    <img src="/assets/deletebutton.png" alt="" />
                </button>
            </div>
        </div>
    );
};

import React from "react";
import "./TodoElement.css";

export const TodoElement = ({ data ,editButtonClick}) => {
    return (
        <div className="todo-element-container">
            <p>{data}</p>
            <div className="buttons-container">
                <button className="edit-todo-button" onClick={editButtonClick}>
                    <img src="/assets/editbutton.png" alt="" />
                </button>
                <button className="delete-todo-button">
                    <img src="/assets/deletebutton.png" alt="" />
                </button>
            </div>
        </div>
    );
};

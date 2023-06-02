import React from "react";
import "./AddNewTodo.css";

export const AddNewTodo = () => {
    return (
        <div className="add-todo-container">
            <input type="text" placeholder="New Todo" />
            <button>ADD TODO</button>
        </div>
    );
};

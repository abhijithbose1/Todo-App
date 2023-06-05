import React from "react";
import "./AddNewTodo.css";

export const AddNewTodo = ({todoList, handleChange, addButtonClick }) => {
    return (
        <div className="add-todo-container">
            <input type="text" placeholder="New Todo" value={todoList} onChange={handleChange} />
            <button onClick={addButtonClick}>ADD TODO</button>
        </div>
    );
};

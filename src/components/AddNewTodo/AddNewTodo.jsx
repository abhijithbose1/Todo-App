import React from "react";
import "./AddNewTodo.css";

export const AddNewTodo = ({todoList, handleAddChange, addButtonClick }) => {
    return (
        <div className="add-todo-container">
            <input type="text" placeholder="New Todo" value={todoList} onChange={handleAddChange} />
            <button onClick={addButtonClick}>ADD TODO</button>
        </div>
    );
};

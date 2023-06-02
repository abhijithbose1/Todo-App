import React from "react";
import "./EditTodo.css";

export const EditTodo = () => {
    return <div className="edit-todo-container">
      <input type="text" placeholder="Editing Current Todo Item"/>
      <button>SAVE</button>
      <button id="cancel-button">CANCEL</button>
    </div>;
};

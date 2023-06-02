import React from "react";
import { AddNewTodo } from "./components/AddNewTodo/AddNewTodo";
import { EditTodo } from "./components/EditTodo/EditTodo";
import { TodoElement } from "./components/TodoElement/TodoElement";
import "./TodoApp.css";

function TodoApp() {
    return (
        <div className="app-container">
            <div className="todo-main-container">
                <h1>Todo List</h1>
                <AddNewTodo />
                <TodoElement/>
                <EditTodo />
            </div>
        </div>
    );
}

export default TodoApp;

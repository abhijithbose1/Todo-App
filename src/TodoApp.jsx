import React, { useState } from "react";
import { AddNewTodo } from "./components/AddNewTodo/AddNewTodo";
import { EditTodo } from "./components/EditTodo/EditTodo";
import { TodoElement } from "./components/TodoElement/TodoElement";
import "./TodoApp.css";

function TodoApp() {
    const [todoList, setTodoList] = useState("");
    const [addTodoList, setAddTodoList] = useState([]);
    const [edit, setEdit] = useState(false);

    const handleChange = (event) => {
        setTodoList(event.target.value);
    };

    const addButtonClick = () => {
        // console.log(todoList);
        setAddTodoList([...addTodoList, todoList]);
        setTodoList("");
    };

    const editButtonClick = () => {
        setEdit(!edit);
    };

    // console.log(addTodoList);
    return (
        <div className="app-container">
            <div className="todo-main-container">
                <h1>Todo List</h1>
                <AddNewTodo todoList={todoList} handleChange={handleChange} addButtonClick={addButtonClick} />
                <div className="todo-inner-container">
                    {addTodoList.map((data) => (
                        <>
                            <TodoElement data={data} editButtonClick={editButtonClick} />
                            {edit && <EditTodo />}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodoApp;

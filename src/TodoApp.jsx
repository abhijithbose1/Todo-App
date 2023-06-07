import React, { useState } from "react";
import { AddNewTodo } from "./components/AddNewTodo/AddNewTodo";
import { EditTodo } from "./components/EditTodo/EditTodo";
import { TodoElement } from "./components/TodoElement/TodoElement";
import "./TodoApp.css";

function TodoApp() {
    const [count, setCount] = useState(1);
    const [todoList, setTodoList] = useState("");
    const [addTodoList, setAddTodoList] = useState([]);
    const [editTodoList, setEditTodoList] = useState("");

    const handleAddChange = (event) => {
        setTodoList(event.target.value);
    };
    const addButtonClick = () => {
        setAddTodoList([...addTodoList, { id: count, complete:false, edit: false, content: todoList }]);
        setCount(count + 1);
        setTodoList("");
    };

    const todoComplete = (todoId) => {
        setAddTodoList((prevTodo)=>
            prevTodo.map((todo)=>{
                if(todo.id===todoId){
                    return {...todo, complete: !todo.complete};
                }
                return todo;
            })
        );
    };

    const editButtonClick = (currentTodo) => {
        setAddTodoList((prevTodo) =>
            prevTodo.map((todo) => {
                if (todo.id === currentTodo.id) {
                    return { ...todo, edit: !todo.edit };
                }
                return todo;
            })
        );
        setEditTodoList(currentTodo.content);
    };

    const deleteButtonClick = (todoId) => {
        setCount(count - 1);
        setAddTodoList((prevTodo) => {
            const newTodo = prevTodo
                .filter((todo) => todo.id !== todoId)
                .map((data) => {
                    if (data.id > todoId) {
                        return { ...data, id: data.id - 1 };
                    }
                    return data;
                });
            return newTodo;
        });
    };

    const handleEditChange = (event) => {
        setEditTodoList(event.target.value);
    };

    const saveButtonClick = (todoId) => {
        setAddTodoList((prevTodo) =>
            prevTodo.map((todo) => {
                if (todo.id === todoId && editTodoList!="") {
                    return { ...todo, edit: !todo.edit, content: editTodoList };
                }
                return todo;
            })
        );
        setEditTodoList("");
    };

    const cancelButtonClick = (todoId) => {
        setAddTodoList((prevTodo) =>
            prevTodo.map((todo) => {
                if (todo.id === todoId) {
                    return { ...todo, edit: !todo.edit };
                }
                return todo;
            })
        );
        setEditTodoList("");
    };

    console.log(addTodoList);

    return (
        <div className="app-container">
            <div className="todo-main-container">
                <h1>Todo List</h1>
                <AddNewTodo todoList={todoList} handleAddChange={handleAddChange} addButtonClick={addButtonClick} />
                <div className="todo-inner-container">
                    {addTodoList.map((data) => (
                        <>
                            <TodoElement
                                data={data}
                                editButtonClick={editButtonClick}
                                deleteButtonClick={deleteButtonClick}
                                todoComplete={todoComplete}
                            />
                            {data.edit && (
                                <EditTodo
                                    data={data}
                                    saveButtonClick={saveButtonClick}
                                    cancelButtonClick={cancelButtonClick}
                                    handleEditChange={handleEditChange}
                                    editTodoList={editTodoList}
                                />
                            )}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodoApp;

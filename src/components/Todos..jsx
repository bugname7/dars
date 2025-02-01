import React, { useState } from "react";
import useTodoStore from "../store/useTodoStore";

function Todos() {
    const [todo, setTodo] = useState("");
    const { todos, addTodo, removeTodo } = useTodoStore();
    function validate() {
        if (todo.length <= 3) {
            alert('malumot juda ham qisqa')
            return false
        }
        return true
    }
    function handleAdd() {
        if (todo.trim()) {
            addTodo(todo);
            setTodo("");
        }
        const isvalid = validate()
        if (!isvalid) {
            return
        }
    }


    return (
        <div className="p-5 w-[500px] border-2 rounded-md mb-5 mt-5 ml-5  ">
            <h1>5. To-do List ilovasi
            </h1>
            <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
            <div className="mb-4">
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Add task"
                    className=" bg-blue-200 p-2 rounded-md w-64 mr-2 outline-0 border-2 border-blue-300"
                />
                <button
                    onClick={handleAdd}
                    className="bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-600"
                >
                    Add
                </button>
            </div>
            <ul>
                {todos.map((item) => (
                    <li key={item.id} className="flex items-center justify-between p-2 border mb-2 rounded-md">
                        <span>{item.text}</span>
                        <button
                            onClick={() => removeTodo(item.id)}
                            className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600"
                        >
                            Clear
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;

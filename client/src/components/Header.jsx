import axios from "axios";
import React, { useContext, useState } from "react";
import { TestContext } from "../context/TestContext";

const Header = ({ handleAdd }) => {
    const [todo, setTodo] = useState("");
    const { count } = useContext(TestContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            name: todo,
        };
        handleAdd(newTodo);

        setTodo("");
    };

    return (
        <div className='flex items-center justify-center bg-teal-600 font-sans'>
            <div className='bg-white rounded shadow w-full lg:w-3/4 p-6 m-4'>
                <form className='mb-4' onSubmit={handleSubmit}>
                    <h1 className='text-gray-950 uppercase font-semibold'>
                        Todo App
                    </h1>
                    <div className='flex'>
                        <input
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                            className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-900'
                            type='text'
                        />
                        <button
                            type='submit'
                            className='flex-shrink-0 p-2 border-2 rounded text-teal-950 border-teal-950 hover:bg-teal-950 hover:text-white'
                        >
                            Add
                        </button>
                    </div>
                </form>
                <div>TotalTodo: {count}</div>
            </div>
        </div>
    );
};

export default Header;

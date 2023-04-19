import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import axios from "axios";

const Wrapper = () => {
    const [listTodos, setListTodos] = useState([]);
    const eventChangeRef = useRef(0);
    const BASE_URL = "http://localhost:5000/api";

    const fetchData = async () => {
        try {
            await axios
                .get(`${BASE_URL}/todos`)
                .then((res) => {
                    setListTodos(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [eventChangeRef.current]);
    console.log("running");

    const handleAdd = async (newTodo) => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/todos",
                newTodo
            );
            setListTodos([...listTodos, res]);
            eventChangeRef.current++;
        } catch (error) {
            console.log(error);
        }
    };

    const handleRemove = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/todos/${id}`);
            setListTodos(listTodos.filter((item) => item._id !== id));
            eventChangeRef.current++;
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeStatus = async (id) => {
        try {
            await axios.put(`${BASE_URL}/todos/${id}`);
            fetchData();
            eventChangeRef.current++;
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='h-screen'>
            <Header handleAdd={handleAdd} />
            <Content
                listTodos={listTodos}
                handleRemove={handleRemove}
                handleChangeStatus={handleChangeStatus}
            />
        </div>
    );
};

export default Wrapper;

import {
    useEffect,
    useRef,
    useState,
    createContext,
    useContext,
    useReducer,
} from "react";
import Header from "./Header";
import Content from "./Content";
import axios from "axios";

import { TestContext } from "../context/TestContext";

import TodoReducer from "../reducer/TodoReducer";

const Wrapper = () => {
    const [listTodos, setListTodos] = useState([]);
    const [totalTodo, setTotalTodo] = useState(0);
    const eventChangeRef = useRef(0);
    const BASE_URL = "http://localhost:5000/api";

    const [todos, dispatch] = useReducer(TodoReducer, listTodos);

    const fetchData = async () => {
        try {
            await axios
                .get(`${BASE_URL}/todos`)
                .then((res) => {
                    setListTodos(res.data);
                    setTotalTodo(res.data.length);
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

    const handleAdd = async (newTodo) => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/todos",
                newTodo
            );
            setListTodos([...listTodos, res]);
            eventChangeRef.current++;
            dispatch({ type: "added", payload: newTodo });
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
            await axios.put(`${BASE_URL}/todos/status/${id}`);
            fetchData();
            eventChangeRef.current++;
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeName = async (id, name) => {
        try {
            await axios.put(`${BASE_URL}/todos/${id}`, { name });
            fetchData();
            eventChangeRef.current++;
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <TestContext.Provider value={{ count: totalTodo }}>
            <div className='h-screen'>
                <Header handleAdd={handleAdd} />
                <Content
                    listTodos={listTodos}
                    handleRemove={handleRemove}
                    handleChangeStatus={handleChangeStatus}
                    handleChangeName={handleChangeName}
                />
            </div>
        </TestContext.Provider>
    );
};

export default Wrapper;

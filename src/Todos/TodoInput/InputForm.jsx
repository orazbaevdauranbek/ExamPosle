import React, { useState, useEffect } from "react";
import TodoCategories from "../TodoCategories/TodoCategories";
import { Button } from "antd";
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";
import Error from "../Error/Error";
import { addTodo } from "../../store/reducer/todo.slice";
import { useDispatch } from "react-redux";
import axios from "axios";

const InputForm = () => {
  const [todoValue, setTodoValue] = useState({
    title: "",
    category: "",
    description: "test",
    category_id: null,
  });
  const [errTodo, setErrTodo] = useState("");
  const [showErr, setShowErr] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();

    axios
      .get("https://todo.paydali.uz/api/categories", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        res.data.data.filter((item) => {
          item.name === todoValue.category
            ? setTodoValue({ ...todoValue, category_id: item.id })
            : "";
        });
      });

    dispatch(addTodo(todoValue));
    axios
      .post("http://todo.paydali.uz/api/tasks", todoValue, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => console.log(res));
    console.log(todoValue);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showErr && setShowErr(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showErr]);
  return (
    <div className=" w-full min-h-screen pt-4 font-bodyFont bg-gradient-to-t bg-slate-600 text-white px-4 flex flex-col gap-10 justify-center items-center">
      <div className="w-[850px] h-full bg-bodyColor p-10 flex flex-col gap-10 bg-slate-500">
        <div className="w-[100%] flex items-center justify-between gap-4 h-12 ">
          <input
            value={todoValue.title}
            onChange={(e) =>
              setTodoValue({ ...todoValue, title: e.target.value })
            }
            className="w-[200%] h-full bg-slate-800 border-[1px] text-white py-2 px-4 placeholder:text-sm tracking-wide rounded-md outline-none hover:border-red-300 hover:text-red-200"
            placeholder="Enter your Todo..."
          />
          <TodoCategories todoValue={todoValue} setTodoValue={setTodoValue} />
        </div>
        <Button onClick={handleClick} className="h-10">
          Add Todo
        </Button>
        <div className=" flex flex-col gap-4">
          <ul className="grid grid-cols-1 gap-4 p- border rounded-md  ">
            <TodoList />
          </ul>
        </div>
        <Footer />
      </div>
      {showErr && <Error errTodo={errTodo} />}
    </div>
  );
};

export default InputForm;

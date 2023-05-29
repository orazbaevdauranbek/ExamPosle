import axios from "axios";
import React, { useEffect, useState } from "react";

const TodoCategories = ({ todoValue, setTodoValue }) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    axios
      .get("https://todo.paydali.uz/api/categories", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        res.data.data.map((item) =>
          setOptions((prev) => [...prev, { id: item.id, name: item.name }])
        );
      });
  }, []);

  return (
    <div className="w-full h-full relative">
      {options ? (
        <select
          value={todoValue.category}
          onChange={(e) => {
            setTodoValue({ ...todoValue, category: e.target.value });
            console.log(e.target.value);
          }}
          className="w-[100%] h-full bg-slate-800 border-[1px] text-white py-2 px-4 placeholder:text-sm tracking-wide rounded-md outline-none hover:border-red-300 hover:text-red-300"
        >
          {options.map((el) => (
            <option key={el.id}>{el.name}</option>
          ))}
        </select>
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoCategories;

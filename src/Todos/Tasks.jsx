import React, { useState, useEffect } from "react";
import axios from "axios";
const Tasks = () => {
  const [tasks, setTaks] = useState([]);

    useEffect(() => {
      axios
      .get("https://todo.paydali.uz/api/tasks", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        res.data.payload.map((item) => setTaks(prev => [...prev, {...item}]));
      })}, []);
    

  return (
    <div className="flex flex-col p-4">
      {tasks?.map((item) => (
        <div key={item.id}>
          <div className="bg-purple-500 w-[40%] h-[50px] flex items-center ">
            {item.category.name}
          </div>
          <div className="bg-purple-600 w-full flex items-center">
            {item.task}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;

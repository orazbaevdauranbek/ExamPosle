import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetched } from "../../store/reducer/register.slice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const state = useSelector((store) => store.register);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    password: "",
  });

  const registerFunc = () => {
    axios.post('http://todo.paydali.uz/api/register', user)
    .then(res => {
      navigate('/login', {replace:true})
    })
  }

  return (
  <div className="w-full min-h-screen pt-4 font-bodyFont bg-gradient-to-t  text-white px-4 flex flex-col gap-10 justify-center items-center">
    <div className="register flex flex-col justify-center items-center bg-slate-500 border border-red-200 rounded-md w-[50%] h-[300px] gap-2 ">
      <input type="text" className="bg-cyan-700 border rounded-md w-[60%] placeholder-shown:bg-slate-700 placeholder:text-gray-200 p-2 hover:border-red-400 " value={user.name} onChange={e => setUser({...user, name: e.target.value})} required placeholder="Enter Name" />

      <input type="phone" className="bg-cyan-700 border rounded-md w-[60%] placeholder-shown:bg-slate-700 placeholder:text-gray-200 p-2 hover:border-red-400 " value={user.phone} onChange={e => setUser({...user, phone: e.target.value})} required placeholder="Enter Phone" />

      <input type="password" className="bg-cyan-700 border rounded-md w-[60%] placeholder-shown:bg-slate-700 placeholder:text-gray-200 p-2 hover:border-red-400 " value={user.password} onChange={e => setUser({...user, password: e.target.value})} required placeholder="Enter Password"/>
      <button className="bg-neutral-300 border border-red-200 p-1 rounded-md w-[100px] text-black hover:border-red-600" onClick={registerFunc}>Submit</button>
    </div>
  </div>
  )
};

export default Register;

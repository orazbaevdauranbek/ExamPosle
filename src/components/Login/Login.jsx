import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchedLogin } from "../../store/reducer/login.slice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const state = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState({
    phone: "",
    password: "",
  });
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://todo.paydali.uz/api/getMe',{
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    } ).then(res => console.log(res))
    .catch(err => {
        navigate('/login', {replace: true})
    })
   }, [localStorage.getItem('token')])


  const LoginFunc = () => {
    axios.post('http://todo.paydali.uz/public/api/login', userLogin)
    .then(res => {
     localStorage.setItem('token', res.data.payload.token),
      navigate('/' , {replace:true})  
      console.log(res);
    //  console.log(res.data.payload.token,'sefsewehfeiofhhefwf');
    })
  }
  // console.log(state, 'Hello');

  return (
     <div className="w-full min-h-screen pt-4 font-bodyFont bg-gradient-to-t px-4 flex flex-col gap-10 justify-center items-center">
    <div className="login flex flex-col justify-center items-center bg-red-400 border border-red-200 rounded-md w-[50%] h-[300px] gap-2">
      <input type="phone" className="bg-cyan-700 border rounded-md w-[60%] placeholder-shown:bg-slate-400 placeholder:text-gray-200 p-2 hover:border-red-400 " value={userLogin.phone} onChange={e => setUserLogin({...userLogin, phone: e.target.value})} required placeholder="Enter Phone" />
      <input type="password" className="bg-cyan-700 border rounded-md w-[60%] placeholder-shown:bg-slate-400 placeholder:text-gray-200 p-2 hover:border-red-400 " value={userLogin.password} onChange={e => setUserLogin({...userLogin, password: e.target.value})} required placeholder="Enter Password"/>
      <button className="bg-neutral-300 border border-red-200 p-1 rounded-md w-[100px] text-black hover:border-red-600" onClick={LoginFunc}>Submit</button>
    </div>
  </div>
  )
};

export default Login;

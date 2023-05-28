import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import InputForm from '../../Todos/TodoInput/InputForm'

const Home = () => {
  // const state = useSelector(store => store.register)
    const navigate = useNavigate()
   useEffect(() => {
    if (localStorage.getItem('token')) {
        axios.get('http://todo.paydali.uz/api/getMe', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(res => console.log(res))
    } else if (!localStorage.getItem('token')) {
        navigate('/login', {replace: true})
    }
   }, [])

    //console.log('Home:', state.token);
  return (
    <div>
      <InputForm/>
    
    </div>
  )
}

export default Home
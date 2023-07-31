import React, { useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()

    let data = new FormData(e.currentTarget);

    axios.post("https://expensive7832.pythonanywhere.com/login/", data)
    .then((res) => {
      if(res.data === "Invalid email"){
        alert("Invalid email");

      }else if(res.data === "Invalid credentials"){
        alert("Invalid credentials");

      }else{
        let data = res.data
        localStorage.setItem("info", data);

        navigate("/")

      }
    })
    .catch((err) => console.log(err))

  }


  return (
    <div>
     <form onSubmit={(e) =>handleSubmit(e)} className='w-50 position-absolute  top-50 start-50  translate-middle '>

        <div>
          <label htmlFor="" className="form-label">Email</label>
          <input type="email" name="email" className="form-control" />
        </div>


        <div>
          <label htmlFor="" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" />
        </div>


      <button className="btn-md btn btn-success" type="submit">Login</button>

     </form>
    </div>
  )
}

export default Login
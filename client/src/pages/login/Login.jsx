import { useContext, useState } from "react"
import axios from "axios"
import "./login.css"
import { AuthContext } from "../../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"

const Login = () =>{
    const [credentials,setCredentials] = useState({
        username:undefined,
        passport:undefined,
    })

const {loading,error,dispatch} = useContext(AuthContext)

const navigate = useNavigate()

const handleChange = (e) =>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
}

const handleClick = async e =>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try{
      const res = await axios.post("http://localhost:8800/api/auth/login",credentials)
      
      dispatch({type:"LOGIN_SUCCESS",payload:res.data.details});
      navigate("/")

    }catch(err){
      dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
    }
}


    return (
        <div className="login">
        <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        <div>Don't have an account? <Link to="/register">Register now!</Link></div>
        {error && <span>{error.message}</span>}
        </div>
        </div>
    )
}

export default Login
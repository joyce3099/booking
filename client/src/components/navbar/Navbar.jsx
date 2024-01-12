
import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";


const Navbar =() =>{
  const {user} = useContext(AuthContext)

    return (
      <div className="navbar">
        <div className="navContainer">
        <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
          <span className="logo">booking</span>
        </Link>
          {user? user.username :( <div className="navItems">
            <Link to="/register" className="navButton">Register</Link>
            <Link to="/login" className="navButton">Login</Link>
          </div>)}

        </div>
      </div>
    )
}

export default Navbar
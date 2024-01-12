import { useState } from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", {
        username: credentials.username,
        email:credentials.email,
        password: credentials.password,
      });

      console.log(res.data); 
      navigate("/login")
    } catch (err) {
      console.error(err.response.data.message); 
    }
  };

  return (
    <div className="register">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
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
        <button onClick={handleClick} className="lButton">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;

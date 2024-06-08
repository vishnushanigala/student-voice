import "./login.css";
import './stu login.gif'
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
function LoginComponent() {

  const navigate=useNavigate();
    const [token,setToken]=useState()
    const handleLogin = async () => {
        console.log("start")
        try{
          const response = await axios.post("http://localhost:4000/login", {
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
        });
        console.log("response")
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("userId", response.data.userId);
          setToken(response.data.token);
          console.log(localStorage.getItem("token"))
          navigate((response.data.role==="admin") ? "/adminhome" : "/userhome");
        } else {
          navigate("/signup");
        }
        }catch(error){
          navigate("/signup")
        }
      };

  return (
    <>
      <div className="login">
            <div className="container">
                <p>Welcome,Please sign-in</p>
                <p>email</p>
                <input type="email" placeholder="Enter user email" id="email"/>
                <hr/>
                <p>Password</p>
                <input type="password" placeholder="Enter user password" id="password"/>
                <hr/>
                <input type="checkbox" id="checkbox"/>Remember me 

                <button  id="button" onClick={()=>handleLogin()}><span>Log in</span></button>
                <div className="signup">
                    <span>Don't have an account?<NavLink to="/signup" id="signup-text">Sign up</NavLink></span>
                </div>
            </div>

                <div className="image">
                <img src={require('./stu login.gif')} id="com-img"/>
                </div>

        </div>
    </>
  );
}

export default LoginComponent;

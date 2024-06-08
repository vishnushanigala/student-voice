import "./register.css";
import "./register.gif";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterComponent() {
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const email = document.getElementById("email").value;
      const password1 = document.getElementById("password1").value;
      const password2 = document.getElementById("password2").value;
      const username = document.getElementById("name").value;
      const userId = document.getElementById("rollno").value;
      const mobileNumber = document.getElementById("mobilenumber").value;

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
      }

      // Password validation
      if (password1 !== password2) {
        alert("confirm password does not match");
        return;
      }

      if (password1.length < 6) {
        alert("Password should be at least 6 characters long");
        return;
      }

      // Additional validations
      if (!username || !userId || !mobileNumber) {
        alert("Please fill out all required fields");
        return;
      }

      // Gender validation
      const genderElement = document.querySelector('input[name="gender"]:checked');
      const gender = genderElement ? genderElement.value : null;
      if (!gender) {
        alert("Please select a gender");
        return;
      }

      const user = {
        email,
        password: password1,
        username,
        userId,
        mobileNumber,
        active: true,
        role: "user",
        gender,
      };

      const response = await axios.post("http://localhost:4000/signup", user);
      if (response.status === 200) {
        navigate("/login");
      } else {
        alert("user already exists !");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during registration");
      navigate("/");
    }
  };

  return (
    <>
      <div className="register">
        <div className="box">
          <h1>Registration</h1>
          <div className="con1">
            <div className="con2">
              <p>Full Name </p>
              <input
                type="text"
                placeholder="Enter your Name"
                id="name"
                required
              />
              <p>Email </p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <p>password </p>
              <input
                type="password"
                placeholder="password"
                id="password1"
                required
              />
            </div>
            <div className="con3">
              <p>User ID </p>
              <input type="text" placeholder="Roll No" id="rollno" required />
              <p>phone no </p>
              <input
                type="text"
                placeholder="phone no"
                id="mobilenumber"
                required
              />
              <p>Confirm password </p>
              <input
                type="password"
                name="password"
                id="password2"
                placeholder="confirm password"
                required
              />
            </div>
          </div>

          <p className="con4">Gender</p>
          <label>
            <input type="radio" name="gender" value="male" required />
            Male &nbsp;&nbsp;
          </label>
          <label>
            <input type="radio" name="gender" value="female" required />
            Female &nbsp;&nbsp;&nbsp;
          </label>
          <label>
            <input type="radio" name="gender" value="prefer not to say" required />
            Prefer not to say&nbsp;&nbsp;&nbsp;
          </label>
          <br />
          <button id="register" onClick={handleRegister}>
            Register
          </button>
          <div>
            <span>Already a member ?<NavLink to="/login">login</NavLink></span>
          </div>
        </div>

        <div className="gif">
          <img src={require("./register.gif")} id="gif" alt="" />
        </div>
      </div>
    </>
  );
}

export default RegisterComponent;

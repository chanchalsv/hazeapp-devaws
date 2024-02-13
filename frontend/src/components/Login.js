// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginUser, setLoading } from "../features/userSlice";
// import { setAccessToken } from "../features/authSlice";
// import { redirectToShopify, completeShopifyAuth } from "../shopifyAuth";
// import "./Login/Login.css";

// const Login = ({ handleChange }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordType, setPasswordType] = useState("");
//   const [error, setError] = useState("");
//   const [shopifyData, setShopifyData] = useState(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/auth/login",
//         {
//           email,
//           password,
//         }
//       );
//       if (response.data.message == "Login Successfully") {
//         navigate("/dashboard");
//         console.log("Gone");
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         setError("Invalid login credentials. Please tryp again");
//       } else {
//         setError("An error occurred. Please try again later");
//       }
//     }
//   };

//   useEffect(() => {
//     completeShopifyAuth(setShopifyData);
//   }, []);

//   useEffect(() => {
//     if (shopifyData) {
//       dispatch(setAccessToken(shopifyData));
//       dispatch(loginUser(shopifyData));
//       navigate("/dashboard");
//     }
//   }, [shopifyData]);

//   const set_PasswordType = () => {
//     setPasswordType((prevType) =>
//       prevType === "password" ? "text" : "password"
//     );
//   };

//   return (
//     <div className=" login">
//       <div className="login_div">Login</div>
//       <div>
//         <label className="label_div">Email</label>
//         <div className="input-div">
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Email"
//           />
//         </div>
//       </div>
//       <div>
//         <label className="label_div">Password</label>
//         <div className="input-div border d-flex justify-content-between">
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type={passwordType}
//             placeholder="Password"
//           />
//           <button
//             className="password-btn"
//             onClick={() => set_PasswordType(passwordType)}
//           >
//             {passwordType === "password" ? <i class="bi bi-eye" /> : <i class="bi bi-eye-slash" />}
//           </button>
//         </div>
//       </div>
//       <div className="forgot_pass">Forgot your password ?</div>
//       <button className="login-btn" onClick={handleLogin}>
//         Log in
//       </button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <div className="account_create">
//         Not a member ?{" "}
//         <span onClick={() => handleChange("signup")}> Create account. </span>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/userSlice";
import { setAccessToken } from "../features/authSlice";
import { completeShopifyAuth } from "../shopifyAuth";
import "./Login/Login.css";

const Login = ({ handleChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Add this line to import useNavigate from 'react-router-dom'

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        }
      );
      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.user))
        dispatch(loginUser(response.data.user));
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again later");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  return (
    <div className="login">
      <div className="login_div">Login</div>
      <div>
        <label className="label_div">Email</label>
        <div className="input-div">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label className="label_div">Password</label>
        <div className="input-div border d-flex justify-content-between">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={passwordType}
            placeholder="Password"
          />
          <button
            className="password-btn"
            onClick={togglePasswordVisibility}
          >
            {passwordType === "password" ? (
              <i className="bi bi-eye" />
            ) : (
              <i className="bi bi-eye-slash" />
            )}
          </button>
        </div>
      </div>
      <div className="forgot_pass">Forgot your password?</div>
      <button className="login-btn" onClick={handleLogin}>
        Log in
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="account_create">
        Not a member?{" "}
        <span onClick={() => handleChange("signup")}>Create account.</span>
      </div>
    </div>
  );
};

export default Login;

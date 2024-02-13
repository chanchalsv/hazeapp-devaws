// import React, { useState } from "react";
// import axios from "axios";
// import "./Login/Login.css";

// const Signup = ({ handleChange }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [repetPassword, SetrepetPassword] = useState("");
//   const [passwordType, setPasswordType] = useState("password");
//   const [repetPasswordType, SetRepetPasswordType] = useState("password");
//   const [isChecked, setChecked] = useState(false);

//   const handleCheckboxChange = () => {
//     setChecked(!isChecked);
//   };
//   const set_PasswordType = () => {
//     setPasswordType((prevType) =>
//       prevType === "password" ? "text" : "password"
//     );
//   };

//   const set_RepetPasswordType = () => {
//     SetRepetPasswordType((prevType) =>
//       prevType === "password" ? "text" : "password"
//     );
//   };

//   const handleSignUp = (event) => {
//     event.preventDefault();

//     axios
//       .post("http://localhost:8080/api/auth/register", {
//         username,
//         email,
//         password,
//         repetPassword,
//       })
//       .then((response) => {
//         console.log("Signup successful", response);
//         handleChange("login");
//       })
//       .catch((error) => {
//         console.error("Signup error", error);
//       });
//   };

//   return (
//     <div className="signup">
//       <div className="login_div ">Sign Up</div>
//       <div>
//         <label className="label_div">Name*</label>
//         <div className="input-div">
//           <input
//             onChange={(e) => setUsername(e.target.value)}
//             type="email"
//             placeholder="Name*"
//             value={username}
//           />
//         </div>
//       </div>
//       <div>
//         <label className="label_div">Email*</label>
//         <div className="input-div">
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Email*"
//             value={email}
//           />
//         </div>
//       </div>
//       <div>
//         <label className="label_div">Password*</label>
//         <div className="input-div border d-flex justify-content-between">
//           {" "}
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type={passwordType}
//             placeholder="Password*"
//             value={password}
//           />
//           <button
//             className="password-btn"
//             onClick={() => set_PasswordType(passwordType)}
//           >
//             {passwordType === "password" ? (
//               <i class="bi bi-eye" />
//             ) : (
//               <i class="bi bi-eye-slash" />
//             )}
//           </button>
//         </div>
//       </div>

//       <div>
//         <label className="label_div">Repet Password*</label>
//         <div className="input-div border d-flex justify-content-between">
//           {" "}
//           <input
//             onChange={(e) => SetrepetPassword(e.target.value)}
//             type={repetPasswordType}
//             placeholder="Repet Password*"
//             value={repetPassword}
//           />
//           <button
//             className="password-btn"
//             onClick={() => set_RepetPasswordType(repetPasswordType)}
//           >
//             {repetPasswordType === "password" ? (
//               <i class="bi bi-eye" />
//             ) : (
//               <i class="bi bi-eye-slash" />
//             )}
//           </button>
//         </div>
//       </div>
//       <div className="d-flex">
//         <input
//           type="checkbox"
//           checked={isChecked}
//           onChange={handleCheckboxChange}
//           style={{ marginRight: "8px" }}
//         />
//         <span className="already_member">
//           {" "}
//           I agree to all statements in <span>Terms of Service</span>
//         </span>
//       </div>
//       <button className="mt-3" onClick={handleSignUp}>
//         Sign up
//       </button>
//       <div
//         className="already_member mt-3"
//         onClick={() => handleChange("login")}
//       >
//         {" "}
//         <span>I’m already a member</span>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import axios from "axios";
import "./Login/Login.css";

const Signup = ({ handleChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      if (!email || !password || !name || !confirmPassword) {
        throw new Error("Please provide all fields.");
      }

      if (password !== confirmPassword) {
        throw new Error("Passwords do not match.");
      }

      const response = await axios.post("http://localhost:8080/api/auth/register", {
        name,
        email,
        password,
        confirmPassword,
      });

      console.log("Signup successful", response.data);
      handleChange("login");
    } catch (error) {
      console.error("Signup error", error.message);
    }
  };

  return (
    <div className="signup">
      <div className="login_div">Sign Up</div>
      <div>
        <label className="label_div">Name*</label>
        <div className="input-div">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name*"
            value={name}
          />
        </div>
      </div>
      <div>
        <label className="label_div">Email*</label>
        <div className="input-div">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email*"
            value={email}
          />
        </div>
      </div>
      <div>
        <label className="label_div">Password*</label>
        <div className="input-div border d-flex justify-content-between">
          {" "}
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password*"
            value={password}
          />
        </div>
      </div>

      <div>
        <label className="label_div">Confirm Password*</label>
        <div className="input-div border d-flex justify-content-between">
          {" "}
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password*"
            value={confirmPassword}
          />
        </div>
      </div>
      <div className="d-flex">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          style={{ marginRight: "8px" }}
        />
        <span className="already_member">
          {" "}
          I agree to all statements in <span>Terms of Service</span>
        </span>
      </div>
      <button className="mt-3" onClick={handleSignUp}>
        Sign up
      </button>
      <div className="already_member mt-3" onClick={() => handleChange("login")}>
        {" "}
        <span>I’m already a member</span>
      </div>
    </div>
  );
};

export default Signup;

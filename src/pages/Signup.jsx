import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { auth } from "./Config/FirebaseConfig";
// import firebase from 'firebase/compat'
import { createUserWithEmailAndPassword } from "firebase/auth";
const Signup = () => {
  const [data, setData] = useState({});
  const submit = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(data)
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <div>
      <div className="main_Container__signup">
        <div className="header">
          <h2>Signup</h2>
        </div>
        <div className="Box">
          <input type="text" placeholder="Username"></input>
        </div>
        <div className="Box">
          <input
            type="text"
            placeholder="E-mail"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          ></input>
        </div>
        <div className="Box">
          <input
            type="password"
            placeholder="Passoward"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          ></input>
        </div>
        <p>
          Allardy Have an Account <Link to="/login">login Now</Link>
        </p>
        <button onClick={submit}>Signup</button>
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Config/FirebaseConfig";

const Login = () => {
    const navigate = useNavigate()
  const [data1, setData1] = useState({});
  const submit1 = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, data1.email, data1.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

      navigate("/todo")
  };
  return (
    <div>
      <div className="main_Container__signup">
        <div className="header">
          <h2>Login</h2>
        </div>
        <div className="Box">
          <input
            type="text"
            placeholder="E-mail"
            onChange={(e) => setData1({ ...data1, email: e.target.value })}
          ></input>
        </div>
        <div className="Box">
          <input
            type="password"
            placeholder="Passoward"
            onChange={(e) => setData1({ ...data1, password: e.target.value })}
          ></input>
        </div>
        <p>
          Create An Account <Link to="/">Signup Now</Link>
        </p>
        <button onClick={submit1}>Login</button>
      </div>
    </div>
  );
};

export default Login;

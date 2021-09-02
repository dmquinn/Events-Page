import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";

import "../stylesheets/Login.css";

const LoginScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  return (
    <div className="flex bg-black items-center justify-center h-screen -mt-12">
      <div className="bg-black flex flex-col w-80 rounded-lg px-8 py-10">
        <div className="text-white mt-10">
          <h1 className="font-bold text-4xl mb-3">Welcome</h1>
          <p className="font-semibold"></p>
        </div>
        <form className="flex flex-col space-y-8 mb-10">
          <input
            type="email"
            placeholder="Email"
            className="border rounded-sm py-3 px-3 bg-gray-200 border-gray-700 placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-sm py-3 px-3 bg-gray-300 border-gray-700 placeholder-gray-500"
          />
          <button className=" bg-red-500 text-white rounded-sm py-3 font-semibold">
            Submit
          </button>
        </form>
        <p className="text-white">
          Not A User Yet?{" "}
          <a href="/register" className="underline">
            {" "}
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { register } from "../actions/userActions";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords don't match");
    }
    dispatch(register(name, email, password));
  };
  return (
    <div className="flex bg-black items-center justify-center h-screen -mt-12">
      <div className="bg-black flex flex-col w-80 rounded-lg px-8 py-10">
        <div className="text-white mt-10">
          <h1 className="font-bold text-4xl mb-3">Register</h1>
        </div>{" "}
        {error && <p>{message}</p>}
        {loading && <Loader />}
        <form
          className="flex flex-col space-y-8 mb-10"
          onSubmit={submitHandler}
        >
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="border rounded-sm py-3 px-3 bg-gray-200 border-gray-700 placeholder-gray-500"
          />{" "}
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="border rounded-sm py-3 px-3 bg-gray-200 border-gray-700 placeholder-gray-500"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border rounded-sm py-3 px-3 bg-gray-300 border-gray-700 placeholder-gray-500"
          />
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            className="border rounded-sm py-3 px-3 bg-gray-300 border-gray-700 placeholder-gray-500"
          />
          <button className=" bg-red-500 text-white rounded-sm py-3 font-semibold">
            Submit
          </button>
        </form>
        <p className="text-white">
          Have an Account Already?{" "}
          <a href="/login" className="underline">
            {" "}
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterScreen;

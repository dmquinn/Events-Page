import React from "react";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import logo from "../logo.svg";
import "../stylesheets/Header.css";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <nav className="flex">
      <a>
        <img src={logo} className="logo mr-20"></img>
      </a>
      <ul className="">
        <li>
          <a href="/events">Events</a>
        </li>
        <li>Music</li>
        <li>Community</li>
      </ul>
      <ul className="navLinks left">
        <li>
          {!userInfo ? (
            <a href="/login">Login</a>
          ) : (
            <p onClick={logoutHandler}>Logout</p>
          )}
        </li>{" "}
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Header;

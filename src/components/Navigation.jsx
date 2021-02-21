import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FaInstagram, FaPinterest, FaFacebook } from "react-icons/fa";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="container">
            <div class="icons">
        <a href="https://www.intagram.com"><FaInstagram size={44} color="pink" /></a>
        <a href="https://www.facebook.com"><FaFacebook size={44} color="pink" /></a>
        <a href="https://www.pinterest.com"><FaPinterest size={44} color="pink" /></a>
        </div>
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
import React from "react";
import { Link } from "react-router-dom";
import cowCartoon from "./pics/cow.png";

function Nav() {
  return (
    <div id="nav">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h1 className="app-title" id="nav-title">
              the{" "}
              <span>
                <img id="nav-cow" src={cowCartoon} alt="cow" />
              </span>{" "}
              goes.....
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <i className="fas fa-home"></i>
                </a>
              </li>
              <li>
                <Link className="dropdown-item" to="/animalsounds">
                  Animal Sounds
                </Link>
              </li>
              <li>
                <Link className="  dropdown-item" to="/piano">
                  Piano
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/game">
                  Memory Game
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

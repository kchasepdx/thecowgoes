import React from "react";

import cowCartoon from "./pics/cow.png";
import barn from "./pics/barn.png";
import tree from "./pics/tree.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header>
        <h1 className="app-title">
          THE{" "}
          <span>
            <img id="cow-cartoon" src={cowCartoon} alt="cow" />
          </span>{" "}
          GOES ...
        </h1>
      </header>
      <div>
        <div id="landing-images">
          <img id="tree-cartoon" src={tree} alt="tree" />
          <img id="barn-cartoon" src={barn} alt="barn" />
          <img id="tree-cartoon" src={tree} alt="tree" />
        </div>
      </div>
      <footer>
        <div>
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <br />
        <Link to="www.kristenchasecodes.com">www.kristenchasecodes.com</Link>
      </footer>
    </div>
  );
}

export default Home;

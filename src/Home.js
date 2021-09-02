import React from "react";

import cowCartoon from "./pics/cow.png";

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
    </div>
  );
}

export default Home;

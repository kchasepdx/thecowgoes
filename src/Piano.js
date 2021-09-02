import React from "react";

import cowCartoon from "./pics/cow.png";

function Piano() {
  //CREATE AUDIOS

  return (
    <div>
      <header>
        <h1 className="app-title">
          PIANO{" "}
          <span>
            <img id="cow-cartoon" src={cowCartoon} alt="cow" />
          </span>{" "}
          FUN{" "}
        </h1>
      </header>
    </div>
  );
}

export default Piano;

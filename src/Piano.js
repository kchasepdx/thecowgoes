import React from "react";
import cowCartoon from "./pics/cow.png";
import Media from "./media.js";

function Piano() {
  //CREATE AUDIOS
  const keyArray = Media.keys;

  function playSound(event, file) {
    event.target.className = "key-clicked";
    let sound = new Audio(file);
    sound.play();
    setTimeout(function () {
      event.target.className = "piano-key";
    }, 500);
  }

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

      <div className="piano-container">
        {keyArray.map((x) => (
          <button
            key={x.key}
            className="piano-key"
            onClick={(event) => playSound(event, x.sound)}
            id={x.id}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Piano;

import React from "react";
import cowCartoon from "./pics/cow.png";

function Piano() {
  //CREATE AUDIOS

  function playSound(event, file) {
    event.target.className = "key-clicked";
    let sound = new Audio(file);
    sound.play();
    setTimeout(function () {
      event.target.className = "piano-key";
    }, 1000);
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
        <div>
          <h2>COMING SOON</h2>
        </div>
      </header>
      <div>
        <div className="animal-container container-fluid">
          <div className="row">
            <div className="col-lg">
              {animalArr.map((x) => (
                <button
                  key={x._id}
                  className="piano-key"
                  onClick={(event) => playSound(event, x.sound)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Piano;

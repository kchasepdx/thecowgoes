import "./App.css";
import React from "react";
// SOUNDS
import cow from "./public/sounds/cow.mov";
import pig from "./public/sounds/pig.mov";
import dog from "./public/sounds/dog.mp3";
import monkey from "./public/sounds/monkey.mp3";
import cat from "./public/sounds/cat.mp3";
import rooster from "./public/sounds/rooster.mp3";
import sheep from "./public/sounds/sheep.mp3";
import elephant from "./public/sounds/elephant.mp3";
import duck from "./public/sounds/duck.mp3";

//PICS
import cowPic from "./public/pics/cowpic.png";
import pigPic from "./public/pics/pigpic.png";
import dogPic from "./public/pics/dog.png";
import monkeyPic from "./public/pics/monkey.png";
import catPic from "./public/pics/cat.png";
import roosterPic from "./public/pics/rooster.png";
import sheepPic from "./public/pics/sheep.png";
import elephantPic from "./public/pics/elephant.png";
import duckPic from "./public/pics/duck.png";

function App() {
  //CREATE AUDIOS
  const cowSound = new Audio(cow);
  const pigSound = new Audio(pig);
  const dogSound = new Audio(dog);
  const monkeySound = new Audio(monkey);
  const catSound = new Audio(cat);
  const roosterSound = new Audio(rooster);
  const sheepSound = new Audio(sheep);
  const elephantSound = new Audio(elephant);
  const duckSound = new Audio(duck);

  function playSound(event, sound) {
    event.target.className = "clicked";

    sound.play();
    setTimeout(function () {
      event.target.className = "animal-pic";
    }, 1000);
  }

  return (
    <div className="App">
      <header>
        <h1>the cow goes.....</h1>
      </header>
      <body>
        <div className="animal-container">
          <button
            className="invisible-btn"
            onClick={(event) => playSound(event, cowSound)}
          >
            <img className="animal-pic" id="cow" src={cowPic} alt="cow" />
          </button>
          <button
            className="invisible-btn"
            onClick={(event) => playSound(event, pigSound)}
          >
            <img className="animal-pic" id="pig" src={pigPic} alt="pig" />
          </button>
          <button
            className="invisible-btn"
            onClick={(event) => playSound(event, dogSound)}
          >
            <img className="animal-pic" id="dog" src={dogPic} alt="dog" />
          </button>
          <button
            className="invisible-btn"
            onClick={(event) => playSound(event, monkeySound)}
          >
            <img
              className="animal-pic"
              id="monkey"
              src={monkeyPic}
              alt="monkey"
            />
          </button>
          <button
            className="invisible-btn"
            onClick={(event) => playSound(event, catSound)}
          >
            <img className="animal-pic" id="cat" src={catPic} alt="cat" />
          </button>
          <button
            className="invisible-btn"
            onClick={(event) => playSound(event, roosterSound)}
          >
            <img
              className="animal-pic"
              id="rooster"
              src={roosterPic}
              alt="rooster"
            />
          </button>
          <button
            className="invisible-btn"
            onClick={(event) => playSound(event, sheepSound)}
          >
            <img className="animal-pic" id="sheep" src={sheepPic} alt="sheep" />
          </button>
          <button
            className="invisible-btn"
            onClick={(event) => playSound(event, elephantSound)}
          >
            <img
              className="animal-pic"
              id="elephant"
              src={elephantPic}
              alt="elephant"
            />
          </button>
          <button
            className="invisible-btn"
            onClick={(event) => playSound(event, duckSound)}
          >
            <img className="animal-pic" id="duck" src={duckPic} alt="duck" />
          </button>
        </div>
      </body>
    </div>
  );
}

export default App;

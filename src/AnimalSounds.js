import React, { useState } from "react";
import Media from "./media";
import cowCartoon from "./pics/cow.png";

function AnimalSounds() {
  const animalArr = Media.animals;
  const [array, setArr] = useState(animalArr.slice(0, 4));
  const [displayAll, setDisplayAll] = useState(false);

  function playSound(event, file) {
    let sound = new Audio(file);
    sound.play();
    event.target.className = "clicked";
    setTimeout(function () {
      event.target.className = "animal-pic";
    }, 1000);
  }

  function shuffle(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random() * i + 1);
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    console.log(array.map((x) => x.name));
    return array;
  }

  function showMore() {
    let shuffledArr = shuffle(animalArr);
    let ranSliceIndexOne = Math.floor(Math.random() * 11);

    let ranSliceIndexTwo = ranSliceIndexOne + 4;
    setArr(shuffledArr.slice(ranSliceIndexOne, ranSliceIndexTwo));
  }

  function setDisplay() {
    if (displayAll) {
      setDisplayAll(false);
      setArr(animalArr.slice(0, 4));
    } else {
      setDisplayAll(true);
    }
  }

  return (
    <div>
      <header>
        <h1 className="app-title">
          Animal{" "}
          <span>
            <img id="cow-cartoon" src={cowCartoon} alt="cow" />
          </span>{" "}
          Sounds
        </h1>
        <button onClick={setDisplay} className="as-btn">
          <i className="fas fa-paw"></i>
          {displayAll === true ? "Show Four" : "Show All"}
        </button>
        {!displayAll && (
          <button className="as-btn" onClick={showMore}>
            <i className="fas fa-cat"></i>Four More
          </button>
        )}
      </header>
      <div>
        <div className="animal-container container-fluid">
          <div className="row">
            {displayAll && (
              <div className="col-lg">
                {" "}
                {animalArr.map((x) => (
                  <button
                    key={x._id}
                    className="invisible-btn"
                    onClick={(event) => playSound(event, x.sound)}
                  >
                    <img
                      className="animal-pic"
                      id={x.name}
                      src={x.image}
                      alt={x.name}
                    />
                  </button>
                ))}
              </div>
            )}
            {!displayAll && (
              <div className="col-lg">
                {" "}
                {array.map((x) => (
                  <button
                    key={x._id}
                    className="invisible-btn"
                    onClick={(event) => playSound(event, x.sound)}
                  >
                    <img
                      className="animal-pic"
                      key={x._id}
                      id={x.name}
                      src={x.image}
                      alt={x.name}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalSounds;

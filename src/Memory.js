import React, { useEffect, useState } from "react";

import cowCartoon from "./pics/cow.png";
import bunny from "./pics/bunny.png";
import shark from "./pics/shark.png";
import bird from "./pics/bird.png";
import frog from "./pics/frog.png";

import Media from "./media";

function Memory() {
  const [clicked, setClicked] = useState({ choiceOne: "", choiceTwo: "" });
  const arrSix = Media.animals.slice(0, 6);
  const arrTwelve = arrSix.concat(arrSix);
  const arrFifteen = Media.animals.slice(0, 15);
  const arrThirty = arrFifteen.concat(arrFifteen);
  const [gameArray, setGameArray] = useState("");
  const [clear, setClear] = useState(["animal"]);
  const [turn, setTurn] = useState(true);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [modal, setModal] = useState(0);
  const [difficulty, setDifficulty] = useState("medium");

  function shuffle(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random() * i + 1);
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  }

  // change difficulty
  useEffect(() => {
    if (difficulty === "medium") {
      setGameArray(shuffle(arrTwelve));
    } else if (difficulty === "hard") {
      setGameArray(shuffle(arrThirty));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty]);

  // Reset Game
  useEffect(() => {
    if (difficulty === "medium") {
      setGameArray(shuffle(arrTwelve));
    } else {
      setGameArray(shuffle(arrThirty));
    }

    setClear(["animal"]);
    setClicked({ choiceOne: "", choiceTwo: "" }, console.log("turn change"));
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get Winner or Change Turn
  useEffect(() => {
    console.log("useEffect Triggered");
    let totalScore = playerOneScore + playerTwoScore;
    if (difficulty === "medium") {
      if (totalScore === 6) {
        if (playerOneScore > playerTwoScore) {
          setModal(1);
        } else if (playerTwoScore > playerOneScore) {
          setModal(2);
        } else {
          setModal(3);
        }
        if (difficulty === "medium") {
          setGameArray(shuffle(arrTwelve));
        } else {
          setGameArray(shuffle(arrThirty));
        }
        setClear(["animal"]);
        setClicked(
          { choiceOne: "", choiceTwo: "" },
          console.log("turn change")
        );
        setPlayerOneScore(0);
        setPlayerTwoScore(0);
      } else {
        setTimeout(
          setClicked(
            { choiceOne: "", choiceTwo: "" },
            console.log("turn change")
          ),
          1000
        );
      }
    } else if (difficulty === "hard") {
      if (totalScore === 15) {
        if (playerOneScore > playerTwoScore) {
          setModal(1);
        } else if (playerTwoScore > playerOneScore) {
          setModal(2);
        } else {
          setModal(3);
        }
        if (difficulty === "medium") {
          setGameArray(shuffle(arrTwelve));
        } else {
          setGameArray(shuffle(arrThirty));
        }
        setClear(["animal"]);
        setClicked(
          { choiceOne: "", choiceTwo: "" },
          console.log("turn change")
        );
        setPlayerOneScore(0);
        setPlayerTwoScore(0);
      } else {
        setTimeout(
          setClicked(
            { choiceOne: "", choiceTwo: "" },
            console.log("turn change")
          ),
          1000
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turn]);

  // check choices for match
  function checkChoices(id, name) {
    console.log("checking");

    setTimeout(() => {
      if (name) {
        if (clicked.choiceOne.name === name) {
          setClear(clear.concat(name));
          console.log("match " + clear);
          if (difficulty === "medium") {
            if (playerOneScore + playerTwoScore === 5) {
              if (turn) {
                setPlayerOneScore(playerOneScore + 1);
                setTurn(!turn);
              } else {
                setPlayerTwoScore(playerTwoScore + 1);
                setTurn(!turn);
              }
            } else {
              if (turn) {
                setPlayerOneScore(playerOneScore + 1);
                setClicked(
                  { choiceOne: "", choiceTwo: "" },
                  console.log("bonus turn")
                );
              } else {
                setPlayerTwoScore(playerTwoScore + 1);
                setClicked(
                  { choiceOne: "", choiceTwo: "" },
                  console.log("bonus turn")
                );
              }
            }
          } else {
            if (playerOneScore + playerTwoScore === 14) {
              if (turn) {
                setPlayerOneScore(playerOneScore + 1);
                setTurn(!turn);
              } else {
                setPlayerTwoScore(playerTwoScore + 1);
                setTurn(!turn);
              }
            } else {
              if (turn) {
                setPlayerOneScore(playerOneScore + 1);
                setClicked({ choiceOne: "", choiceTwo: "" });
              } else {
                setPlayerTwoScore(playerTwoScore + 1);
                setClicked({ choiceOne: "", choiceTwo: "" });
              }
            }
          }
        } else {
          setTurn(!turn);
        }
      } else {
        console.log("no choice 2");
      }
    }, 1000);
  }

  async function handleClick(event) {
    let id = event.target.id;
    let name = event.target.name;
    console.log(event);
    if (clicked.choiceOne === "") {
      setClicked({
        choiceOne: { choice: id, name: name },
        choiceTwo: "",
      });
    } else if (clicked.choiceOne !== "" && clicked.choiceTwo === "") {
      const statePromise = new Promise((resolve, reject) => {
        setClicked({
          choiceOne: clicked.choiceOne,
          choiceTwo: { choice: id, name: name },
        });
        resolve("Success!");
      });
      statePromise.then(checkChoices(id, name));
    } else {
      alert("wait a sec");
    }
  }

  return (
    <div>
      <header>
        <h1 className="app-title">
          MEMORY{" "}
          <span>
            <img id="cow-cartoon" src={cowCartoon} alt="cow" />
          </span>{" "}
          GAME
        </h1>
        {difficulty === "medium" && (
          <button id="mode-btn-hard" onClick={() => setDifficulty("hard")}>
            <img className="mode-btn" src={shark} alt="shark" /> Change to Hard
            Mode <img className="mode-btn" src={shark} alt="shark" />
          </button>
        )}
        {difficulty === "hard" && (
          <button id="mode-btn-med" onClick={() => setDifficulty("medium")}>
            <img className="mode-btn" src={bunny} alt="bunny" /> Change to Easy
            Mode <img className="mode-btn" src={bunny} alt="bunny" />
          </button>
        )}

        <div>
          <h2 className={`player-one ${turn && "highlight-player"}`}>
            <i className="fas fa-frog"></i> PLAYER ONE
          </h2>{" "}
          <span id="player-one-score" className="badge bg-secondary player-one">
            {playerOneScore}
          </span>
          <h2 className={`player-two ${!turn && "highlight-player"}`}>
            <i className="fas fa-kiwi-bird"></i> PLAYER TWO
          </h2>{" "}
          <span id="player-two-score" className="badge bg-secondary player-two">
            {playerTwoScore}
          </span>
        </div>
      </header>

      {/* MODAL */}
      {modal !== 0 ? (
        <>
          <div className="alert alert-success" role="alert">
            {modal === 1 ? (
              <>
                <img className="vic-pic" src={frog} alt="frog"></img>{" "}
                <h5>THE FROG WINS</h5>
              </>
            ) : modal === 2 ? (
              <>
                <img className="vic-pic" src={bird} alt="bird"></img>
                <h5>CONGRATS, BIRD!</h5>
              </>
            ) : modal === 3 ? (
              <>
                <p>
                  <img className="tie-pic" src={frog} alt="frog"></img>IT'S A
                  TIE!
                  <img className="tie-pic" src={bird} alt="bird"></img>
                </p>
              </>
            ) : null}
          </div>
          <div className="d-grid ">
            <button
              className="as-btn"
              onClick={() => {
                setModal(0);
              }}
            >
              Play Again?
            </button>
          </div>
        </>
      ) : null}

      {/* Cards */}

      {modal === 0 ? (
        <div className="animal-container-game container-fluid">
          <div className="row">
            <div className="row">
              <div className="col">
                {gameArray &&
                  gameArray.map((x, index) => (
                    <button
                      onClick={(event) => handleClick(event)}
                      id={index}
                      name={x.name}
                      className={
                        clear.includes(x.name) & (difficulty === "medium")
                          ? "delete game-card"
                          : clear.includes(x.name) & (difficulty === "hard")
                          ? "delete game-card-hard"
                          : difficulty === "medium"
                          ? "game-card"
                          : difficulty === "hard"
                          ? "game-card-hard"
                          : null
                      }
                      // className={`game-card ${
                      //   clear.includes(x.name) ? "delete" : null
                      // }`}
                      key={index}
                      disabled={clear.includes(x.name) ? true : false}
                    >
                      {clicked.choiceOne.choice === index.toString() ||
                      clicked.choiceTwo.choice === index.toString() ? (
                        <img
                          className={`game-animal-pic ${
                            clear.includes(x.name) ? "delete-animal" : null
                          }`}
                          id={index}
                          src={x.image}
                          alt={x.name}
                          key={index}
                        />
                      ) : (
                        <button
                          name={x.name}
                          id={index}
                          className={`placeholder-div ${
                            clear.includes(x.name) ? "delete" : null
                          }`}
                        ></button>
                      )}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Memory;

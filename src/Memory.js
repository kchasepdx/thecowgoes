import React, { useEffect, useState } from "react";

import cowCartoon from "./pics/cow.png";
import Media from "./media";
import { setTokenSourceMapRange } from "typescript";

function Memory() {
  const [clicked, setClicked] = useState({ choiceOne: "", choiceTwo: "" });
  const arrSix = Media.animals.slice(0, 6);
  const arrTwelve = arrSix.concat(arrSix);
  const [gameArray, setGameArray] = useState("");
  const [clear, setClear] = useState(["animal"]);
  const [turn, setTurn] = useState(true);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [modal, setModal] = useState(0);

  function shuffle(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random() * i + 1);
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  }

  useEffect(() => {
    setGameArray(shuffle(arrTwelve));
    setClear(["animal"]);
    setClicked({ choiceOne: "", choiceTwo: "" }, console.log("turn change"));
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("useEffect Triggered");
    let totalScore = playerOneScore + playerTwoScore;
    if (totalScore === 6) {
      if (playerOneScore > playerTwoScore) {
        setModal(1);
      } else if (playerTwoScore > playerOneScore) {
        setModal(2);
      } else {
        setModal(3);
      }
      setGameArray(shuffle(arrTwelve));
      setClear(["animal"]);
      setClicked({ choiceOne: "", choiceTwo: "" }, console.log("turn change"));
      setPlayerOneScore(0);
      setPlayerTwoScore(0);
    } else {
      setTimeout(
        setClicked(
          { choiceOne: "", choiceTwo: "" },
          console.log("turn change")
        ),
        2000
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turn]);

  function checkChoices(id, name) {
    console.log("checking");

    setTimeout(() => {
      if (name) {
        if (clicked.choiceOne.name === name) {
          setClear(clear.concat(name));
          console.log("match " + clear);
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
        <div>
          <h2 className={`player-one ${turn && "highlight-player"}`}>
            <i className="fas fa-frog"></i> PLAYER ONE
          </h2>{" "}
          <span id="player-one-score" className="badge bg-secondary player-one">
            {playerOneScore}
          </span>
          <h2 className={`player-two ${!turn && "highlight-player"}`}>
            <i class="fas fa-kiwi-bird"></i> PLAYER TWO
          </h2>{" "}
          <span id="player-two-score" className="badge bg-secondary player-two">
            {playerTwoScore}
          </span>
        </div>
      </header>

      {/* MODAL */}
      {modal !== 0 ? (
        <>
          <div class="alert alert-success" role="alert">
            {modal === 1 ? (
              <>
                <i className="fas fa-frog"> </i>
                <h5>THE FROG WINS</h5>
              </>
            ) : modal === 2 ? (
              <>
                <i className="fas fa-kiwi-bird"></i>
                <h5>CONGRATS, BIRD!</h5>
              </>
            ) : modal === 3 ? (
              <>
                <i className="fas fa-frog"></i>
                <p>IT'S A TIE!</p>
                <i className="fas fa-kiwi-bird"></i>
              </>
            ) : null}
          </div>
          <div class="d-grid ">
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

      {/* Body */}
      {modal === 0 ? (
        <div className="animal-container-game container-fluid">
          <div className="row">
            <div className="col">
              {gameArray &&
                gameArray.map((x, index) => (
                  <button
                    onClick={(event) => handleClick(event)}
                    id={index}
                    name={x.name}
                    className={`game-card ${
                      clear.includes(x.name) ? "delete" : null
                    }`}
                    key={index}
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
                        className="placeholder-div"
                      ></button>
                    )}
                  </button>
                ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Memory;

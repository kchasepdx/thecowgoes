import "./App.css";
import React from "react";

import Nav from "./nav";
import Home from "./Home";
import AnimalSounds from "./AnimalSounds";
import { BrowserRouter, Route } from "react-router-dom";
import Memory from "./Memory";
import Piano from "./Piano";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <main>
          <div>
            <Route path="/" exact={true} component={Home} />
            <Route path="/animalsounds" component={AnimalSounds} />
            <Route path="/game" component={Memory} />
            <Route path="/piano" component={Piano} />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

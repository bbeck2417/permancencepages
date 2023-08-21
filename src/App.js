import React from "react";

import "./App.css";
import "./fonts/Tangerine/Tangerine-Regular.ttf";
import Transition from "./transition";
import BackgroudMusic from "./BackgroundMusic";

function App() {
  return (
    <div className="App-header">
      <BackgroudMusic />

      <Transition />
    </div>
  );
}

export default App;

import React from "react";

import "./App.css";
import "./fonts/Tangerine/Tangerine-Regular.ttf";
import Transition from "./transition";
import "./vcompress_3.mov";


function App() {
  return (
    
    
    
    <div className="App-header">
    <video loop autoPlay>
        <source
          src="./vcompress_3.mov"
          type="video/mov"
        />
        Your browser does not support the video tag.
      </video>
      

      <Transition />
    </div>
  );
}

export default App;

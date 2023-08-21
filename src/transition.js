import React from "react";
import EnglishPeaks from "./Components/englishPeaks";
import FrenchPeaks from "./Components/frenchPeaks";
import FinnishPeaks from "./Components/finnishPeaks";
import "./App.css";
import "./fonts/Tangerine/Tangerine-Regular.ttf";

const items = [<EnglishPeaks />, <FrenchPeaks />, <FinnishPeaks />];

function Transition() {
  const [mediaItem, setMediaItem] = React.useState(items[0]); // <-- seed initial state
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i + 1) % items.length), // <-- increment index
      13000
    );
    return () => clearInterval(timerId);
  }, []);

  React.useEffect(() => {
    setMediaItem(items[index]); // <-- update media state when index updates
  }, [index]);

  return (
    <div>
      <div className="font-face-tangerine">
        <div>
          <div className="fade-component">
            <span>{mediaItem}</span>
          </div>
        </div>
      </div>

      <footer></footer>
    </div>
  );
}

export default Transition;

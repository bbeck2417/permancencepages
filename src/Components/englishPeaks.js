import React from "react";
import "../App.css";
import ig from "../instagram.png";
import i from "../infinity.png";
import t from "../hour-glass.png";

function EnglishPeaks() {
  return (
    <div className="topFlex">
      <div className="App">
        <header className="App-header">
          <div className="font-face-tangerine">
            <div>
              <div className="aboutMe">
                <h2>About Me</h2>
              </div>
              <div className="poet">
                <h4>I am a poet thru Nature</h4>
              </div>
            </div>

            <div className="content">
              <p>
                I enjoy traveling accross the world in observance of life.
                Looking for nature peaking through, in an abudance of
                interactions. Interactions only presented in that specific
                moment of time and in of place. For me to capture a moment of
                feeling and thought...
              </p>
            </div>

            <div className="ig">
              <div>
                <a
                  href="https://www.instagram.com/will_iambeck"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={ig} alt="Poet vs Nature" />
                </a>
              </div>
            </div>
          </div>
        </header>
        <footer className="needSpace">
          <p>
            Copyright from <img src={i} alt="lift off" />{" "}
            <img src={t} alt="this is taking forever" />{" "}
            <img src={i} alt="what is that?" />.{" "}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default EnglishPeaks;

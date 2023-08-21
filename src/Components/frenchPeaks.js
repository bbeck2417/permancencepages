import React from "react";
import "../App.css";
import ig from "../instagram.png";
import i from "../infinity.png";
import t from "../hour-glass.png";

function FrenchPeaks() {
  return (
    <div className="topFlex">
      <div className="App">
        <div className="font-face-tangerine">
          <div>
            <div className="aboutMe">
              <h2>Sur moi</h2>
            </div>
            <div className="poet">
              <h4>Je suis poète de nature</h4>
            </div>
          </div>

          <div className="content">
            <p>
              J'aime voyager à travers le monde dans le respect de la vie. A la
              recherche de la nature à son comble, dans une abondance
              d'interactions. Les interactions ne sont présentées qu'à ce moment
              précis du temps et dans le lieu. A moi de capturer un moment
              d'émotion et de réflexion ...
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

export default FrenchPeaks;

import React from "react";
import "../App.css";
import ig from "../instagram.png";
import i from "../infinity.png";
import t from "../hour-glass.png";




function FrenchPeaks() {
  return (
    <div className="topFlex">
    <div className="App">
      <header className="App-header">
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
              J'aime voyager autour du monde en suivant la vie.
               Vous recherchez la nature à son apogée, en abondance
               interactions. Les interactions sont présentées uniquement dans cette section
               dans le moment et le lieu. Pour capturer un instant
               sentiment et pensée...
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

export default FrenchPeaks;

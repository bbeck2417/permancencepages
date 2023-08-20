import React from "react";
import "../App.css";
import ig from "../instagram.png";
import i from "../infinity.png";
import t from "../hour-glass.png";




function FinnishPeaks() {
  return (
    <div className="topFlex">
    <div className="App">
      <header className="App-header">
        <div className="font-face-tangerine">
          
            <div>
              <div className="aboutMe">
                <h2>Minusta</h2>
              </div>
              <div className="poet">
                <h4>Olen runoilija luonnon kautta</h4>
              </div>
            </div>

            <div className="content">
              <p>
              Nautin matkustamisesta ympäri maailmaa elämää noudattaen.
              Etsitkö luontoa huipussaan, runsaasti
              vuorovaikutuksia. Vuorovaikutukset esitetään vain kyseisessä kohdassa
              hetkessä ja paikassa. Jotta voisin vangita hetken
              tunne ja ajatus...
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

export default FinnishPeaks;

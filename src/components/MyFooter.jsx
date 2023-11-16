import React, { useEffect, useState } from "react";
import "../App.css";

const MyFooter = () => {
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      setShowFooter(scrollPosition > documentHeight - windowHeight - 300);
    };

    // Aggiungi i listener per gli eventi
    window.addEventListener("scroll", handleScroll);

    // Pulisci i listener quando il componente viene smontato
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${showFooter ? "show" : ""}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Collegamenti Utili</h3>
          <ul>
            <li>
              <a
                href="https://cookpad.com/it/cerca/bergamotto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ricette al Bergamotto
              </a>
            </li>
            <li>
              <a
                href="https://www.cure-naturali.it/enciclopedia-naturale/alimentazione/nutrizione/bergamotto-proprieta-e-calorie.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Proprietà del Bergamotto
              </a>
            </li>
            <li>
              <a
                href="https://www.ilgolosario.it/it/bergamotto-agrume-calabria"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notizie dal Mondo del Bergamotto
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contattaci</h3>
          <p className="green">Email: luca.pratico@live.it</p>
          <p className="green">Telefono: +39 3464105830</p>
        </div>
        <div className="footer-section">
          <h3>Seguici</h3>
          <p>
            <a
              href="https://www.facebook.com/luca.pratico1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/gianluca-pratic%C3%B2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </p>
          <p>
            <a
              href="https://github.com/Gianlucapratico"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Altri Link</h3>
          <ul>
            <li>
              <a
                href="https://www.touringclub.it/notizie-di-viaggio/bergare-un-evento-per-scoprire-il-bergamotto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eventi Bergamottiani
              </a>
            </li>
            <li>
              <a
                href="https://www.essenzabergamotto.com/prodotto/bergamotto-frutto-fresco/?gclid=Cj0KCQiAmNeqBhD4ARIsADsYfTetVTrcg6_SWZsJ9mhheqibtAWqwHjY1ZPJn7cU47xlOfsJAREGBmQaApOWEALw_wcB"
                target="_blank"
                rel="noopener noreferrer"
              >
                Acquista Bergamotto Online
              </a>
            </li>
            <li>
              <a
                href="https://agricolae.eu/bergamotto-e-il-made-in-italy-piu-esportato-con-il-99/?print=print#:~:text=Oltre%20il%2090%25%20della%20produzione,di%2020.000%20tonnellate%20di%20frutto."
                target="_blank"
                rel="noopener noreferrer"
              >
                Bergamotto nel Mondo
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Bergamotto di Reggio Calabria</p>
      </div>
    </footer>
  );
};

export default MyFooter;

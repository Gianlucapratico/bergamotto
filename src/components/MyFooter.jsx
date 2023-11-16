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
              <a href="#">Ricette al Bergamotto</a>
            </li>
            <li>
              <a href="#">Proprietà del Bergamotto</a>
            </li>
            <li>
              <a href="#">Notizie dal Mondo del Bergamotto</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contattaci</h3>
          <p className="green">Email: info@bergamotto.com</p>
          <p className="green">Telefono: +39 123 456 789</p>
        </div>
        <div className="footer-section">
          <h3>Seguici</h3>
          <p>
            <a href="#">Facebook</a>
          </p>
          <p>
            <a href="#">Instagram</a>
          </p>
          <p>
            <a href="#">Twitter</a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Altri Link</h3>
          <ul>
            <li>
              <a href="#">Eventi Bergamottiani</a>
            </li>
            <li>
              <a href="#">Acquista Bergamotto Online</a>
            </li>
            <li>
              <a href="#">Bergamotto nel Mondo</a>
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

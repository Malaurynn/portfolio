import "../styles/card.css";
import "../styles/bio.css";
import profile from "../assets/profile.jpg";
import cv from "../assets/cv.pdf";

const Bio = () => {
  return (
    <div className="card">
      <div className="bio-container">
        <h2 id="Biographie">Biographie</h2>
        <section className="card-bio">
          <p className="card-content">
            Jeune développeuse web passionnée et avide d’apprendre, je suis
            constamment à la recherche de nouveaux défis pour enrichir mes
            compétences. Dotée d'une grande capacité d'adaptation, polyvalente
            et rigoureuse, j’apprécie particulièrement le travail en équipe, où
            la collaboration et le partage d’idées permettent d’atteindre des
            objectifs communs. Toujours prête à élargir mes horizons, je suis
            motivée par l’envie d’évoluer dans un environnement dynamique où je
            pourrai contribuer de manière significative tout en continuant de
            progresser.
          </p>
          <img src={profile} alt="profile photo" className="profile" />
        </section>
        <div className="cvtelechargement">
          <a href={cv} target="_blank" rel="noreferrer">
            Télécharger mon cv
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bio;

import "../styles/card.css";
import "../styles/comp.css";
import skills from "../assets/data.tsx";

const Comp = () => {
  return (
    <div className="body-comp">
      <div className="card">
        <div className="comp-container">
          <section className="card-comp">
            <h2 id="Compétances">Compétences</h2>
            <p className="card-comp">
              Organisation, autonomie, rigeur, curiosité, esprit d’équipe,
              adaptabilité, communication, flexibilité
            </p>
            <h2 className="card-title">Compétences techniques</h2>
            <section className="icones">
              {skills.map((skill) => (
                <img className="icone" src={skill.icon} alt={skill.name} />
              ))}
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Comp;

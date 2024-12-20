import "../styles/card.css";
import "../styles/expe.css";

import capt1bloom from "../assets/capt1bloom.png";
import capt2bloom from "../assets/capt2bloom.png";
import captHaka1 from "../assets/captHaka1.png";
import captHaka2 from "../assets/captHaka2.png";
import captp21 from "../assets/captp21.png";
import captp22 from "../assets/captp22.png";
import captp23 from "../assets/captp23.png";
import captp24 from "../assets/captp24.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const data1 = [
  { id: 1, img: capt1bloom, caption: "image 1" },
  { id: 2, img: capt2bloom, caption: "image 2" },
];

const data2 = [
  { id: 1, img: captHaka1, caption: "image 1" },
  { id: 2, img: captHaka2, caption: "image 2" },
];

const data3 = [
  { id: 1, img: captp21, caption: "image 1" },
  { id: 2, img: captp22, caption: "image 2" },
  { id: 3, img: captp23, caption: "image 3" },
  { id: 4, img: captp24, caption: "image 4" },
];

function Expe() {
  return (
    <div className="cards_projects">
      <div className="title_project">
        <h1>Projet</h1>
        <p>Explorez mes réalisations récentes.</p>
      </div>
    <div className="card-container-expe">
      <div className="card-projets">
        <div className="caroussel1">
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {data3.map((item) => (
              <div key={item.id}>
                <img src={item.img} alt={item.caption} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="card-text">
          <h1>Projet Strasbouq</h1>
          <p>Application web style e-shop pour une fleuriste</p>
          <p>VITE | REACT | JAVASCRIPT | TYPESCRIPT | CSS | API</p>
          <a
            href="https://github.com/Malaurynn/StrasBouq_p2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lien vers le dépôt Github
          </a>
        </div>
      </div>

      <div className="card-projets">
        <div className="caroussel2">
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {data1.map((item) => (
              <div key={item.id}>
                <img src={item.img} alt={item.caption} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="card-text">
          <h1>Projet Bloomésia</h1>
          <p>Application web style e-shop pour une fleuriste</p>
          <p>VITE | REACT | JAVASCRIPT | TYPESCRIPT | CSS | API</p>
        </div>
      </div>

      <div className="card-projets">
        <div className="caroussel3">
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {data2.map((item) => (
              <div key={item.id}>
                <img src={item.img} alt={item.caption} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="card-text">
          <h1>Projet ReConnect</h1>
          <p>Application web d'entraide | échange de biens et de services</p>
          <p>REACT | JAVASCRIPT | TYPESCRIPT | CSS | API</p>
          <a
            href="https://github.com/Malaurynn/reConnect"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lien vers le dépôt Github
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Expe;

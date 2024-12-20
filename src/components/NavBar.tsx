import "../styles/navbar.css";
import linkedin from "../assets/linkedin.png";
import pngegg from "../assets/pngegg.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#Biographie">Biographie</a>
      <a href="#Compétances">compétances</a>
      <a href="#Expériences">Expériences</a>
      <a href="#Contact">Contact</a>
      <a
        href="https://www.linkedin.com/in/malaury-nezan-a21959243/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="" className="logoLink" />
      </a>
      <a
        href="https://github.com/Malaurynn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={pngegg} alt="" className="logoGit" />
      </a>
    </nav>
  );
};

export default Navbar;

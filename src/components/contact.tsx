import React, { useState } from "react";
import emailjs from "emailjs-com";
import loca from "../assets/loca.png";
import mail from "../assets/mail.png";
import "../styles/contact.css";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env;
  
    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      console.error("Les variables d'environnement EmailJS ne sont pas configurées.");
      alert("Erreur : Les variables d'environnement EmailJS sont manquantes.");
      return;
    }
  
    emailjs
      .send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        formData,
        VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Message envoyé : ", result.text);
          alert("Votre message a bien été envoyé !");
        },
        (error) => {
          console.error("Erreur : ", error.text);
          alert("Une erreur est survenue. Veuillez réessayer.");
        }
      );
  
    setFormData({
      name: "",
      firstName: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact">
      <div className="left-contener">
        <div id="Contact">
          <img src={mail} alt="email" />
          <p>malaurynezan.pro@gmail.com</p>
        </div>
        <div>
          <img src={loca} alt="localisation" />
          <p>Angers, 49000</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Formulaire de contact</h2>
        <div>
          <label>Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="field"
            placeholder="Entrez votre nom"
            required
          />
        </div>
        <div className="right-contener">
          <label>Prénom</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="field"
            placeholder="Entrez votre prénom"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="field"
            placeholder="Entrez votre email"
            required
          />
        </div>
        <div>
          <label>Votre demande</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Entrez votre message ici"
            required
          ></textarea>
        </div>
        <button type="submit">Envoyer le message</button>
      </form>
    </section>
  );
};

export default Contacts;

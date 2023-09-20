import "./ContactSection.css";

import ContactForm from "../ContactForm/ContactForm";

function ContactSection() {
  return (
    <section className="contact">
      <h2 className="contact__title" id="contactMe">
        Contato
      </h2>

      <p className="contact__description">
        Mande um olá para sugestões, elogios, críticas, enfim... o que quiser me
        dizer. Basta preencher{" "}
        <a className="contact__link" href="#contactForm">
          o formulário abaixo
        </a>
      </p>

      <ContactForm />
    </section>
  );
}

export default ContactSection;

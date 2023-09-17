import ContactForm from "../ContactForm/ContactForm";

function ContactSection() {
  return (
    <section>
      <h2 id="contactMe">Contato</h2>

      <p>
        Mande um olá para sugestões, elogios, críticas, enfim... o que quiser me
        dizer. Basta preencher
        <a href="#contactForm">o formulário abaixo</a>
      </p>

      <ContactForm />
    </section>
  );
}

export default ContactSection;

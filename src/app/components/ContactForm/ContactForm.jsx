function ContactForm() {
  return (
    <form action="" method="post">
      <fieldset>
        <legend>Informações básicas</legend>

        <div role="group">
          <label htmlFor="name">Nome:</label>
          <input id="name" type="text" />
          <output htmlFor="name"></output>
        </div>

        <div role="group">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" />
          <output htmlFor="email"></output>
        </div>

        <div role="group">
          <label htmlFor="subject">Assunto:</label>
          <input id="subject" type="text" />
          <output htmlFor="subject"></output>
        </div>

        <div role="group">
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" cols="30" rows="10"></textarea>
          <output htmlFor="message"></output>
        </div>
      </fieldset>

      <button type="submit">Fale Comigo</button>
    </form>
  );
}

export default ContactForm;

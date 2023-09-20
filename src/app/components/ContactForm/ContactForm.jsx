import "./ContactForm.css";

function ContactForm() {
  return (
    <form className="form" action="" method="post">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Informações básicas</legend>

        <div className="form__field" role="group">
          <label className="form__label" htmlFor="nameField">
            Nome:
          </label>

          <input className="form__input" id="nameField" type="text" />

          <output className="form__output" htmlFor="nameField"></output>
        </div>

        <div className="form__field" role="group">
          <label className="form__label" htmlFor="emailField">
            Email:
          </label>

          <input className="form__input" id="emailField" type="email" />

          <output className="form__output" htmlFor="emailField"></output>
        </div>

        <div className="form__field" role="group">
          <label className="form__label" htmlFor="name">
            Assunto:
          </label>

          <input className="form__input" id="subjectField" type="text" />

          <output className="form__output" htmlFor="subjectField"></output>
        </div>

        <div className="form__field--textarea" role="group">
          <label className="form__label" htmlFor="messageField">
            Mensagem:
          </label>

          <textarea
            className="form__textarea"
            name="message"
            id="messageField"
            cols="30"
            rows="10"
          ></textarea>

          <output className="form__output--textarea" htmlFor="messageField"></output>
        </div>
      </fieldset>

      <button className="form__submit" type="submit">
        Fale Comigo
      </button>
    </form>
  );
}

export default ContactForm;

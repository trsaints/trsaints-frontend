import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <h6 className="footer__title">Thiago Rodrigues - Desenvolvedor Front-End</h6>

      <p className="footer__description">{currentYear} Todos os direitos reservados</p>

      <p className="footer__description">
        Feito por <a className="footer__link" href="https://github.com/trsaints/">@trsaints</a>
      </p>
    </footer>
  );
}

export default Footer;

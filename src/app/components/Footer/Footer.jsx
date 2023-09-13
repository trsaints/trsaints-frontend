function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <h6>Thiago Rodrigues - Desenvolvedor Front-End</h6>

      <p>{currentYear} Todos os direitos reservados</p>

      <p>
        Feito por <a href="https://github.com/trsaints/">@trsaints</a>
      </p>
    </footer>
  );
}

export default Footer;

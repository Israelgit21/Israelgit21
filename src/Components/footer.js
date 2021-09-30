import React from "react";
import './footer.css'

function Footer() {
  return (
    <footer>
  
      <section className="Footer">
        <div className="Social">
          <p className="Subtitulo">
            <strong>Siganos nas redes sociais</strong>
          </p>
          <a href="https://github.com/">
            <i className="fab fa-github-square "></i>
          </a>

          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/gaming/Madjaze">
            <i className="fab fa-facebook-square"></i>
          </a>
        </div>
        <div className="List">
          <p className="Subtitulo">
            <strong>Seu concesionario perto de você:</strong>
          </p>
          <ul>
            <li>São Paulo</li>
            <li>Brasilia</li>
            <li>Campinas</li>
            <li>Fortaleza</li>
            <li>Rio de Janeiro</li>
          </ul>
        </div>

        <p className="Subtitulo">
          <strong>Atenção ao cliente</strong>
        </p>
        <a href="https://www.heropatterns.com/" className="Whatsaap">
          <i class="fab fa-whatsapp-square"></i>{" "}
        </a>

        <hr></hr>

        <p>2021 &copy Todos os Direitos reservados: Cars</p>
      </section>
    </footer>
  );
}
export default Footer;

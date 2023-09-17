import { useState } from "react";
import MenuBar from "../Menu/MenuBar";
import Resume from "../Resume/Resume";

function AboutSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const resumeOptions = [
    {
      name: "close-button",
      text: "Fechar",
      onClick: () => setModalOpen(false),
    },
  ];

  return (
    <section id="aboutMe" className="about">
      <h2 className="about__title">Sobre mim</h2>

      <p className="about__description">
        Comecei a programar em 2021 e desde então meu foco tem sido no
        desenvolvimento Front-End
      </p>

      <button className="about__button" onClick={() => setModalOpen(true)}>
        Ver Currículo
      </button>

      <dialog className="modal" open={modalOpen ? true : false}>
        <MenuBar items={resumeOptions} />

        <Resume />
      </dialog>
    </section>
  );
}

export default AboutSection;

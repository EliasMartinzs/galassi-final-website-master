import {
  AboutImg,
  AboutMain,
  AboutTitle,
  AboutUser,
  AboutWrapper,
  ImgUser,
  Img,
  AboutDescription,
  AboutSubTitle,
  AboutTitleDesc,
  AboutParagraphDesc,
  Button,
} from "./About.elements";

import aboutImg from "../../assets/sobre.webp";
import aboutUser from "../../assets/jhow1.png";

const About = () => {
  return (
    <AboutMain id="sobre">
      <AboutImg>
        <Img style={{ backgroundImage: `url(${aboutImg})` }} loading="lazy" />
        <AboutTitle>SOBRE O NUTRICIONISTA</AboutTitle>
        <AboutWrapper>
          <AboutUser>
            <ImgUser
              style={{ backgroundImage: `url(${aboutUser})` }}
              loading="lazy"
            />
          </AboutUser>
          <AboutDescription>
            <AboutSubTitle>NUTRICIONISTA ESPORTIVO E ESTETICA</AboutSubTitle>
            <AboutTitleDesc>JONATHAN GALASSI</AboutTitleDesc>
            <AboutParagraphDesc>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam delectus nulla facere vitae voluptas maxime vel
              accusantium nemo hic similique et, a excepturi repellat. Esse
              cumque officia obcaecati quos sit.
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam delectus nulla facere vitae voluptas maxime vel
              accusantium nemo hic similique et, a excepturi repellat. Esse
              cumque officia obcaecati quos sit.
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam delectus nulla facere vitae voluptas maxime vel
              accusantium nemo hic similique et, a excepturi repellat. Esse
              cumque officia obcaecati quos sit.
            </AboutParagraphDesc>
            <Button
              to="https://api.whatsapp.com/send/?phone=43991622448&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              QUERO MARCAR UMA CONSULTA
            </Button>
          </AboutDescription>
        </AboutWrapper>
      </AboutImg>
    </AboutMain>
  );
};

export default About;

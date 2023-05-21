import { Link } from "react-router-dom";
import {
  FooterMain,
  FooterTitle,
  FooterCopy,
  SocialMedias,
  SocialIcon,
  WaveFooter,
} from "./Footer.elements";

import Whats from "../../assets/Wb.svg";
import Insta from "../../assets/It.svg";
import Gmail from "../../assets/gmail.svg";
import Wave from "../../assets/waveFooter.svg";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <>
      <WaveFooter style={{ backgroundImage: `url(${Wave})` }} />
      <FooterMain>
        <FooterTitle>Jonathan Galassi Nutricionista </FooterTitle>
        <FooterTitle fontSmall>
          jonathan.s.galassi@edu.unifil.br - 43 99162-2448
        </FooterTitle>
        <FooterCopy>Copyright By Jonathan Gallasi 2018 - {year} </FooterCopy>
        <SocialMedias>
          <Link to="https://wa.me/43991622448" target="_blank">
            <SocialIcon src={Whats} alt="whats" />
          </Link>
          <Link
            to="https://www.instagram.com/jonathan.galassi_nutri/"
            target="_blank"
          >
            <SocialIcon src={Insta} alt="insta" />
          </Link>
          <Link to="mailto:jonathan.s.galassi@edu.unifil.br - 43 99162-2448">
            <SocialIcon src={Gmail} alt="Gmail" />
          </Link>
        </SocialMedias>
      </FooterMain>
    </>
  );
};

export default Footer;

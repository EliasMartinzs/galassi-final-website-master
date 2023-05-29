import { Link } from "react-router-dom";
import { useState } from "react";

import Menu from "../../assets/Menu.svg";
import Close from "../../assets/Close.svg";
import Insta from "../../assets/It.svg";
import Gmail from "../../assets/gmail.svg";
import Whats from "../../assets/Wb.svg";

import {
  Nav,
  NavContainer,
  NavIcon,
  NavMenu,
  NavItems,
  NavItem,
  NavLink,
  NavLogo,
  NavMedia,
  NavAbout,
  Icon,
} from "./Navbar.elements";

import WaveNav from "../../assets/waveNav.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const scrollTo = () => {
    window.scrollTo(top, { behavior: "smooth" });
  };

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <Nav style={{ backgroundImage: `url(${WaveNav})` }}>
        <NavContainer>
          <NavIcon onClick={handleClick}>
            {click ? (
              <Icon src={Close} alt="menu" loading="lazy" />
            ) : (
              <Icon src={Menu} alt="menu" loading="lazy" />
            )}
          </NavIcon>

          <NavLogo to="/" onClick={scrollTo}>
            Jonathan Gallasi
          </NavLogo>

          <NavMenu onClick={handleClick} click={click}>
            <NavItems>
              <NavItem>
                <NavLink href="#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#especialidades">Especialidades</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contato">Contato</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#atendimentos">Atendimentos</NavLink>
              </NavItem>
              <NavItem>
                <NavAbout to="/sobre" onClick={scrollTo}>
                  Sobre Mim
                </NavAbout>
              </NavItem>
            </NavItems>
            <NavMedia>
              <Link
                to="https://www.instagram.com/jonathan.galassi_nutri/"
                target="_blank"
              >
                <Icon src={Insta} alt="insta" loading="lazy" />
              </Link>
              <Link to="mailto:jonathan.s.galassi@edu.unifil.br - 43 99162-2448">
                <Icon src={Gmail} alt="Gmail" loading="lazy" />
              </Link>
              <Link to="https://wa.me/43991622448" target="_blank">
                <Icon src={Whats} alt="whats" loading="lazy" />
              </Link>
            </NavMedia>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;

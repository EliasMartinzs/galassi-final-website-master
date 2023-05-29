import styled from "styled-components";
import { Container } from "../../GlobalStyle";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  align-items: center;
  position: sticky;
  z-index: 999;
  top: 0;

  background-size: cover;
  background-position: center;
  background-color: transparent;

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 60px 0 60px 0;
    height: 180px;
    margin-bottom: -60px;
  }
`;

export const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  ${Container}
`;

export const NavIcon = styled.div`
  display: flex;
  font-size: 24px;
  color: #000;
  padding: 20px;
  cursor: pointer;
  align-items: flex-start;
`;

export const NavMenu = styled.div`
  position: absolute;
  top: 100px;
  left: ${({ click }) => (click ? 0 : "-150%")};
  width: 430px;
  height: 90vh;
  background: rgb(18, 21, 34);
  background: linear-gradient(
    135deg,
    rgba(18, 21, 34, 1) 10%,
    rgba(36, 40, 54, 1) 93%
  );

  transition: all 0.5s ease;
  cursor: pointer;

  @media (min-width: 320px) and (max-width: 767px) {
    left: ${({ click }) => (click ? 0 : "-100%")};
    width: 100%;
    height: 100vh;
    margin-top: 21px;
    z-index: -999;
  }
`;

export const NavLogo = styled(Link)`
  display: flex;
  flex-direction: row;
  font-size: 40px;
  font-weight: 700;
  color: #1a9b22;
  cursor: pointer;
  text-decoration: none;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 32px;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  font-size: 32px;
  width: 100%;
  margin-top: 90px;

  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: 25px;
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  &:hover {
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  }
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  font-size: 38px;

  &:hover {
    &:hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const NavAbout = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  font-size: 38px;

  &:hover {
    &:hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export const NavMedia = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 180px;
  gap: 30px;

  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: 60px;
  }
`;

import styled from "styled-components";

export const Img = styled.img`
  width: 100vw;
  height: 70vh;
  background-size: cover;
  background-position: left;
  filter: contrast(70%);
  z-index: -999;

  @media (min-width: 320px) and (max-width: 767px) {
    height: 60vh;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextImg = styled.p`
  padding: 20px;
  background-color: rgba(280, 280, 280, 0.7);
  position: absolute;
  margin-left: 680px;
  font-size: 38px;
  text-align: center;
  border-radius: 35px 0 0 35px;

  @media (min-width: 320px) and (max-width: 767px) {
    margin: 0;
    font-size: 24px;
    border-radius: 0;
  }
`;

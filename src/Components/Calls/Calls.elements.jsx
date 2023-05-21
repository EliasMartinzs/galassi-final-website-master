import styled from "styled-components";

export const CallsMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #121522;
  padding: 100px;
  z-index: 100;
  margin-bottom: -5px;
  margin-top: -15px;

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 40px 2px 40px 10px;
  }
`;

export const CallsTitle = styled.h3`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  color: #fff;
  font-size: 38px;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 20px;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    font-size: 18px;
  }
`;

export const CallsItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  align-items: center;
  padding-top: 27px;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
`;

export const CallsItemText = styled.h4`
  font-size: 18px;
  color: #fff;
  font-weight: 300;
  text-transform: capitalize;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 13px;
  }
`;

export const Waves = styled.img`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-color: #e7efe8;
  z-index: -100;
  position: relative;
`;

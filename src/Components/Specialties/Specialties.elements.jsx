import styled from "styled-components";

export const MainSpe = styled.section`
  background-color: #fff;
  margin-top: -10px;
  margin-bottom: -10px;
  width: 100%;

  @media (min-width: 320px) and (max-width: 767px) {
    height: 1300px;
    font-size: 21px;
  }
`;

export const SpeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0px 0px 40px;
`;

export const SpeTitle = styled.h3`
  font-size: ${({ font }) => (font ? "32px" : "58px")};
  color: ${({ colorGreen }) => (colorGreen ? "#1a9b22" : "#f121522")};
  display: flex;
  align-items: center;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 38px;
    padding-top: 20px;
  }
`;

export const Special = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 45px;

  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    gap: 35px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 40vh;
  margin: 60px 0 60px 0;
  filter: contrast(80%);
  background-size: cover;
  background-position: center;
`;

export const SpecialCard = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
  transform: translateY(-57%);
  flex-direction: column;
  padding: 0 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
  width: 600px;
  height: 400px;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 80%;
  }
`;

export const SpeTitleCard = styled.h4`
  font-size: 26px;
  padding-bottom: 20px;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const SpecSmall = styled.small`
  font-size: 16px;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 12px;
  }
`;

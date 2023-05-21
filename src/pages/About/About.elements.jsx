import styled from "styled-components";

export const AboutMain = styled.div`
  max-width: 99vw;
  margin-bottom: -20px;
  background-color: #e7efe8;
`;

export const AboutImg = styled.div`
  max-width: 99vw;
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  position: absolute;
  filter: grayscale(100%);
`;

export const AboutTitle = styled.h3`
  width: 99vw;
  height: 200px;
  font-size: 32px;
  font-weight: 700;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

export const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 50px 0;
  gap: 50px;
  flex-wrap: wrap;

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 20px 0;
    gap: 15px;
  }
`;

export const AboutUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgUser = styled.img`
  width: 500px;
  height: 500px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 400px;
    height: 500px;
  }
`;

export const AboutDescription = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    padding: 40px;
    gap: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: start;
  }
`;

export const AboutSubTitle = styled.p`
  font-size: 17px;
  font-weight: 100;

  @media (min-width: 320px) and (max-width: 767px) {
  }
`;

export const AboutTitleDesc = styled.h3`
  font-size: 40px;
  font-weight: 700;
`;

export const AboutParagraphDesc = styled.p`
  margin-top: 30px;
  font-size: 17px;
  font-weight: 100;
`;

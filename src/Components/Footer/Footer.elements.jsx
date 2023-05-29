import styled from "styled-components";

export const FooterMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  background-color: #121522;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media (min-width: 320px) and (max-width: 767px) {
    height: 210px;
  }
`;

export const FooterTitle = styled.h4`
  color: #e7efe8;
  font-size: ${({ fontSmall }) => (fontSmall ? "16px" : "32px")};
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 80px;
  margin-bottom: 8px;

  @media (min-width: 320px) and (max-width: 767px) {
    gap: 0px;
    flex-direction: row;
  }
`;

export const FooterCopy = styled.small`
  color: #e7efe8;
  margin-top: 35px;
`;

export const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 30px;
  width: 100%;

  @media (min-width: 320px) and (max-width: 767px) {
    padding-top: 45px;
  }
`;

export const SocialIcon = styled.img`
  width: 35px;
  height: 35px;
`;

export const WaveFooter = styled.img`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 200px;
  margin-bottom: -10px;
  background-position: center;
  background-size: cover;
  z-index: -11;
`;

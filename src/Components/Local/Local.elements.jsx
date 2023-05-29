import styled from "styled-components";

export const LocalMain = styled.div`
  width: 100%;
  height: 900px;
  background-color: #fff;
  margin-bottom: -1px;
  padding: 80px;

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 0;
  }
`;

export const LocalTitle = styled.h4`
  color: #121522;
  font-size: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 26px;
  }
`;

export const LocalSubTitle = styled.p`
  font-size: 25px;
  color: #121522;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 25px;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 17px;
  }
`;

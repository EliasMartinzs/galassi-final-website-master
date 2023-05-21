import styled from "styled-components";
import Accordion from "@mui/material/Accordion";

export const FaqsMain = styled.div`
  width: 100%;
  background-color: #e7efe8;
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FaqsTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 38px;
  margin-bottom: 60px;
  font-weight: 300;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 26px;
  }
`;

export const AccordionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  gap: 15px;

  @media (min-width: 320px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AccordionStyled = styled(Accordion)`
  width: 600px;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 410px;
  }
`;

import { TextField } from "@mui/material";
import styled from "styled-components";

export const ContactMain = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 50px;
`;

export const MainTitle = styled.h4`
  font-size: ${({ main }) => (main ? "21px" : "38px")};
  font-weight: 300;
  padding-bottom: 7px;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 26px;
  }
`;

export const MainForms = styled.div`
  width: 100%;

  @media (min-width: 320px) and (max-width: 767px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const MainRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  width: 100%;

  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
`;

export const TextFieldStyled = styled(TextField)`
  width: 900px;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 350px;
  }
`;

export const Button = styled.button`
  padding: 15px;
  width: 900px;
  border-radius: 42px;
  background-color: #121522;
  color: #e7efe8;
  font-size: 18px;
  cursor: pointer;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 350px;
  }
  &:hover {
    color: #121522;
    background-color: #e7efe8;
    transition: all 0.5s ease-in-out;
  }
`;

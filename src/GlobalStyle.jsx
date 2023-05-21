import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Space Mono', monospace;
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media (min-width: 320px) and (max-width: 767px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Icon = styled.img`
  height: 50px;
  width: 50px;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 15px 15px 0;
  cursor: pointer;
`;

export default GlobalStyle;

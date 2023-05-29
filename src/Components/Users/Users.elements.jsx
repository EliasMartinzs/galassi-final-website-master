import styled from "styled-components";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

export const UsersMain = styled.div`
  width: 100%;
  padding: 80px 20px;
  background-color: #fff;
  transition-timing-function: linear;
`;

export const UsersTitle = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 38px;
  padding-bottom: 10px;
  font-weight: 300;
  padding-bottom: 20px;
`;

export const UsersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const UsersCard = styled.div`
  width: 500px;
  height: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 400px;
    height: 300px;
  }
`;

export const UsersImg = styled.img`
  width: 100px;
  height: 100px;
  background-position: center;
  background-size: cover;
  border-radius: 100%;
`;

export const UsersCardTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const UsersCardSubTitle = styled(Link)`
  font-size: 14px;
  color: #000;
  text-decoration: none;
  margin-bottom: 5px;
`;

export const UsersCardDescription = styled.h4`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const UsersRating = styled(Rating)`
  margin-bottom: 5px;
`;

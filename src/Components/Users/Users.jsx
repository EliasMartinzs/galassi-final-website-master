import {
  UsersCard,
  UsersCardDescription,
  UsersCardSubTitle,
  UsersCardTitle,
  UsersImg,
  UsersMain,
  UsersRating,
  UsersTitle,
  UsersWrapper,
} from "./Users.elements";

import Avatar1 from "../../assets/avatar-1.jpg";
import Elias from "../../assets/elias.jpeg";

const Users = () => {
  return (
    <UsersMain>
      <UsersTitle>FEEDBACKS DOS PACIENTES</UsersTitle>
      <UsersWrapper>
        <UsersCard>
          <UsersImg
            style={{ backgroundImage: `url(${Elias})` }}
            loading="lazy"
          />
          <UsersCardTitle>Elias Martins</UsersCardTitle>
          <UsersCardSubTitle to="">@eliasmartinzs</UsersCardSubTitle>
          <UsersCardDescription>
            Gostaria de expressar minha mais alta recomendação para o Jonathan.
            Tive a oportunidade de ser atendido por ele e fiquei extremamente
            satisfeito com sua competência, profissionalismo e comprometimento
            com a saúde dos seus pacientes.
          </UsersCardDescription>
          <UsersRating value={5} readOnly />
        </UsersCard>

        <UsersCard>
          <UsersImg
            style={{ backgroundImage: `url(${Avatar1})` }}
            loading="lazy"
          />
          <UsersCardTitle>Lorem Lorem</UsersCardTitle>
          <UsersCardSubTitle to="">@loremlorem</UsersCardSubTitle>
          <UsersCardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quasi
            eveniet aperiam, consequatur quisquam quod nulla tenetur beatae
            nihil expedita quidem eum voluptatibus rem assumenda sed esse sequi,
            minima ipsa.
          </UsersCardDescription>
          <UsersRating value={5} readOnly />
        </UsersCard>

        <UsersCard>
          <UsersImg
            style={{ backgroundImage: `url(${Avatar1})` }}
            loading="lazy"
          />
          <UsersCardTitle>Lorem Lorem</UsersCardTitle>
          <UsersCardSubTitle to="">@loremlorem</UsersCardSubTitle>
          <UsersCardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quasi
            eveniet aperiam, consequatur quisquam quod nulla tenetur beatae
            nihil expedita quidem eum voluptatibus rem assumenda sed esse sequi,
            minima ipsa.
          </UsersCardDescription>
          <UsersRating value={5} readOnly />
        </UsersCard>

        <UsersCard>
          <UsersImg
            style={{ backgroundImage: `url(${Avatar1})` }}
            loading="lazy"
          />
          <UsersCardTitle>Lorem Lorem</UsersCardTitle>
          <UsersCardSubTitle to="">@loremlorem</UsersCardSubTitle>
          <UsersCardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quasi
            eveniet aperiam, consequatur quisquam quod nulla tenetur beatae
            nihil expedita quidem eum voluptatibus rem assumenda sed esse sequi,
            minima ipsa.
          </UsersCardDescription>
          <UsersRating value={5} readOnly />
        </UsersCard>
      </UsersWrapper>
    </UsersMain>
  );
};

export default Users;

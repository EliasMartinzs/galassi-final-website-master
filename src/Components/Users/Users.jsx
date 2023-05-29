import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Users = () => {
  return (
    <UsersMain>
      <UsersTitle>FEEDBACKS DOS PACIENTES</UsersTitle>
      <UsersWrapper>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          autoplay={{ delay: 0 }}
          speed={5000}
          loop
        >
          <SwiperSlide>
            <UsersCard>
              <UsersImg
                style={{ backgroundImage: `url(${Elias})` }}
                loading="lazy"
              />
              <UsersCardTitle>Elias Martins</UsersCardTitle>
              <UsersCardSubTitle to="">@eliasmartinzs</UsersCardSubTitle>
              <UsersCardDescription>
                Gostaria de expressar minha mais alta recomendação para o
                Jonathan. Tive a oportunidade de ser atendido por ele e fiquei
                extremamente satisfeito com sua competência, profissionalismo e
                comprometimento com a saúde dos seus pacientes.
              </UsersCardDescription>
              <UsersRating value={5} readOnly />
            </UsersCard>
          </SwiperSlide>
          <SwiperSlide>
            <UsersCard>
              <UsersImg
                style={{ backgroundImage: `url(${Avatar1})` }}
                loading="lazy"
              />
              <UsersCardTitle>lorem lorem lorem</UsersCardTitle>
              <UsersCardSubTitle to="">@loremlorem</UsersCardSubTitle>
              <UsersCardDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate architecto asperiores, voluptatem reprehenderit
                corrupti, doloremque impedit fugit distinctio, expedita error
                vero ab. At doloribus ex assumenda dolore inventore consequuntur
                itaque.
              </UsersCardDescription>
              <UsersRating value={5} readOnly />
            </UsersCard>
          </SwiperSlide>
          <SwiperSlide>
            <UsersCard>
              <UsersImg
                style={{ backgroundImage: `url(${Avatar1})` }}
                loading="lazy"
              />
              <UsersCardTitle>lorem lorem lorem</UsersCardTitle>
              <UsersCardSubTitle to="">@loremlorem</UsersCardSubTitle>
              <UsersCardDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate architecto asperiores, voluptatem reprehenderit
                corrupti, doloremque impedit fugit distinctio, expedita error
                vero ab. At doloribus ex assumenda dolore inventore consequuntur
                itaque.
              </UsersCardDescription>
              <UsersRating value={5} readOnly />
            </UsersCard>
          </SwiperSlide>
          <SwiperSlide>
            <UsersCard>
              <UsersImg
                style={{ backgroundImage: `url(${Avatar1})` }}
                loading="lazy"
              />
              <UsersCardTitle>lorem lorem lorem</UsersCardTitle>
              <UsersCardSubTitle to="">@loremlorem</UsersCardSubTitle>
              <UsersCardDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate architecto asperiores, voluptatem reprehenderit
                corrupti, doloremque impedit fugit distinctio, expedita error
                vero ab. At doloribus ex assumenda dolore inventore consequuntur
                itaque.
              </UsersCardDescription>
              <UsersRating value={5} readOnly />
            </UsersCard>
          </SwiperSlide>
          <SwiperSlide>
            <UsersCard>
              <UsersImg
                style={{ backgroundImage: `url(${Avatar1})` }}
                loading="lazy"
              />
              <UsersCardTitle>lorem lorem lorem</UsersCardTitle>
              <UsersCardSubTitle to="">@loremlorem</UsersCardSubTitle>
              <UsersCardDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate architecto asperiores, voluptatem reprehenderit
                corrupti, doloremque impedit fugit distinctio, expedita error
                vero ab. At doloribus ex assumenda dolore inventore consequuntur
                itaque.
              </UsersCardDescription>
              <UsersRating value={5} readOnly />
            </UsersCard>
          </SwiperSlide>
          <SwiperSlide>
            <UsersCard>
              <UsersImg
                style={{ backgroundImage: `url(${Avatar1})` }}
                loading="lazy"
              />
              <UsersCardTitle>lorem lorem lorem</UsersCardTitle>
              <UsersCardSubTitle to="">@loremlorem</UsersCardSubTitle>
              <UsersCardDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate architecto asperiores, voluptatem reprehenderit
                corrupti, doloremque impedit fugit distinctio, expedita error
                vero ab. At doloribus ex assumenda dolore inventore consequuntur
                itaque.
              </UsersCardDescription>
              <UsersRating value={5} readOnly />
            </UsersCard>
          </SwiperSlide>
          <SwiperSlide>
            <UsersCard>
              <UsersImg
                style={{ backgroundImage: `url(${Avatar1})` }}
                loading="lazy"
              />
              <UsersCardTitle>lorem lorem lorem</UsersCardTitle>
              <UsersCardSubTitle to="">@loremlorem</UsersCardSubTitle>
              <UsersCardDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate architecto asperiores, voluptatem reprehenderit
                corrupti, doloremque impedit fugit distinctio, expedita error
                vero ab. At doloribus ex assumenda dolore inventore consequuntur
                itaque.
              </UsersCardDescription>
              <UsersRating value={5} readOnly />
            </UsersCard>
          </SwiperSlide>
        </Swiper>
      </UsersWrapper>
    </UsersMain>
  );
};

export default Users;

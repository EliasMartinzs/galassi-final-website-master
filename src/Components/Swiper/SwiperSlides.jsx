import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Img, ContainerImg, TextImg } from "./SwiperSlides.elements";
import LazyLoad from "react-lazy-load";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img1 from "../../assets/1.webp";
import img2 from "../../assets/2.webp";
import img3 from "../../assets/3.webp";

const SwiperSlides = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={true}
        id="home"
      >
        <SwiperSlide>
          <ContainerImg>
            <LazyLoad threshold={0.95} offset={1200}>
              <Img style={{ backgroundImage: `url(${img1})` }} loading="lazy" />
            </LazyLoad>
            <TextImg>
              Uma dieta saudável pode prevenir uma série de doenças e ajudar a
              manter um estilo de vida ativo e produtivo.
            </TextImg>
          </ContainerImg>
        </SwiperSlide>
        <SwiperSlide>
          <ContainerImg>
            <LazyLoad threshold={0.95} offset={1200}>
              <Img style={{ backgroundImage: `url(${img2})` }} loading="lazy" />
            </LazyLoad>
            <TextImg>
              Uma dieta saudável pode prevenir uma série de doenças e ajudar a
              manter um estilo de vida ativo e produtivo.
            </TextImg>
          </ContainerImg>
        </SwiperSlide>
        <SwiperSlide>
          <ContainerImg>
            <LazyLoad threshold={0.95} offset={1200}>
              <Img style={{ backgroundImage: `url(${img3})` }} loading="lazy" />
            </LazyLoad>
            <TextImg>
              Uma dieta saudável pode prevenir uma série de doenças e ajudar a
              manter um estilo de vida ativo e produtivo.
            </TextImg>
          </ContainerImg>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSlides;

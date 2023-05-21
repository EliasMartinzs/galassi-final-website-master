import { Link } from "react-router-dom";

import SwiperSlides from "../../Components/Swiper/SwiperSlides";
import Specialties from "../../Components/Specialties/Specialties";
import Calls from "../../Components/Calls/Calls";
import Faqs from "../../Components/Faqs/Faqs";
import Users from "../../Components/Users/Users";
import Contact from "../../Components/Contact/Contact";
import Local from "../../Components/Local/Local";

import { Icon } from "../../GlobalStyle";
import WhatsIcon from "../../assets/Whats.png";

const Home = () => {
  return (
    <>
      <SwiperSlides />
      <Specialties />
      <Calls />
      <Faqs />
      <Users />
      <Contact />
      <Local />
      <Link to="https://wa.me/43991622448" target="_blank">
        <Icon src={WhatsIcon} />
      </Link>
    </>
  );
};

export default Home;

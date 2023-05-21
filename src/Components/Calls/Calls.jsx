import {
  CallsMain,
  CallsTitle,
  CallsItem,
  Img,
  CallsItemText,
  Waves,
} from "./Calls.elements";

import Data from "./Data";
import Wave from "../../assets/wave.svg";
import WaveTop from "../../assets/waveTop.svg";

const Calls = () => {
  return (
    <>
      <Waves
        style={{ backgroundImage: `url(${WaveTop})` }}
        top
        id="atendimentos"
      />
      <CallsMain>
        <CallsTitle>Como Funciona Nosso Atendimento ?</CallsTitle>
        {Data.map((item, i) => (
          <CallsItem key={i} data-aos="fade-right">
            <Img src={item.img} alt={item.name} />
            <CallsItemText>{item.name}</CallsItemText>
          </CallsItem>
        ))}
      </CallsMain>
      <Waves style={{ backgroundImage: `url(${Wave})` }} />
    </>
  );
};

export default Calls;

import {
  MainSpe,
  SpeWrapper,
  SpeTitle,
  Special,
  SpecialCard,
  SpeTitleCard,
  SpecSmall,
  Img,
} from "./Specialties.elements";

import bgSpe from "../../assets/bgSpe.webp";

const Specialties = () => {
  return (
    <>
      <MainSpe id="especialidades">
        <SpeWrapper>
          <SpeTitle colorGreen data-aos="fade-right">
            Especialidades
          </SpeTitle>
        </SpeWrapper>

        <Special>
          <Img style={{ backgroundImage: `url(${bgSpe})` }} loading="lazy" />
        </Special>

        <Special data-aos="fade-down">
          <SpecialCard>
            <SpeTitleCard>
              Especialista em Nutrição Esportiva e Estética
            </SpeTitleCard>

            <SpecSmall>
              Um especialista em nutrição e estética é um profissional que tem
              conhecimentos sobre nutrição, dieta, exercício físico,
              suplementação, cuidados com a pele e outros aspectos relacionados
              à beleza e bem-estar do corpo.
            </SpecSmall>
          </SpecialCard>

          <SpecialCard>
            <SpeTitleCard font>
              Especialista em Tratamentos e Doenças Crônicas
            </SpeTitleCard>

            <SpecSmall>
              Um nutricionista que ajuda no tratamento de doenças crônicas
              utiliza seu conhecimento em nutrição para desenvolver planos
              alimentares individualizados, com o objetivo de controlar ou
              reduzir os sintomas da doença e melhorar a qualidade de vida do
              paciente. Alguns exemplos de doenças crônicas que podem ser
              tratadas com intervenções nutricionais incluem diabetes,
              hipertensão, obesidade, doenças cardiovasculares, doenças renais,
              doenças hepáticas, doenças gastrointestinais, câncer, entre
              outras.
            </SpecSmall>
          </SpecialCard>
        </Special>
      </MainSpe>
    </>
  );
};

export default Specialties;

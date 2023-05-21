import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  FaqsMain,
  FaqsTitle,
  AccordionWrapper,
  AccordionStyled,
} from "./Faqs.elements";

const Faqs = () => {
  return (
    <FaqsMain>
      <FaqsTitle>Perguntas Frequentes !</FaqsTitle>
      <AccordionWrapper>
        <AccordionStyled sx={{ background: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Como funciona o atendimento nutricional e qual é a duração média de
            uma consulta?
          </AccordionSummary>
          <AccordionDetails>
            Isso irá depender do objetivo do paciente e da complexidade de cada
            caso. Em média a consulta dura 45 minutos a 1 hora.
          </AccordionDetails>
        </AccordionStyled>

        <AccordionStyled sx={{ background: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Como é feito o planejamento alimentar e quais são as principais
            etapas desse processo?
          </AccordionSummary>
          <AccordionDetails>
            De forma individualizada, onde juntos no ato da consulta o
            profissional e o paciente entram em acordo sobre a melhor estratégia
            a ser executada. o plano pode ser entregue no dia da consulta ou em
            até 3 dias dependendo da necessidade do paciente atendido.
          </AccordionDetails>
        </AccordionStyled>

        <AccordionStyled sx={{ background: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Qual é a importância da avaliação física e bioquímica para o
            planejamento alimentar?
          </AccordionSummary>
          <AccordionDetails>
            Avaliação física resulta na quantidade que a pessoa irá ingerir de
            calorias diariamente para ter um bom resultado.
          </AccordionDetails>
        </AccordionStyled>
      </AccordionWrapper>
    </FaqsMain>
  );
};

export default Faqs;

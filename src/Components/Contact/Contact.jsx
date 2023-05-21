import { useState } from "react";
import { useForm } from "@formspree/react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import {
  ContactMain,
  TextFieldStyled,
  MainTitle,
  MainForms,
  Form,
  MainRight,
  Button,
} from "./Contact.elements";

const Contact = () => {
  const [nome, SetNome] = useState("");
  const [email, SetEmail] = useState("");
  const [telefone, SetTelefone] = useState("");
  const [duvidas, SetDuvidas] = useState("");

  const [state, handleSubmit] = useForm("xnqyrqeb");

  const clearInputs = () => {
    SetNome("");
    SetEmail("");
    SetTelefone("");
    SetDuvidas("");
  };

  return (
    <>
      <ContactMain id="contato">
        <MainForms>
          <MainRight>
            <MainTitle>Alguma duvída ? Entre em contato.</MainTitle>
            <Form
              action="https://formspree.io/f/xnqyrqeb"
              method="POST"
              onSubmit={handleSubmit}
            >
              <TextFieldStyled
                label="Primeiro Nome"
                type="text"
                name="nome"
                onChange={(e) => SetNome(e.target.value)}
                value={nome}
                requited
              />
              <TextFieldStyled
                label="Seu Email Aqui"
                type="email"
                placeholder="nome@email.com"
                name="email"
                onChange={(e) => SetEmail(e.target.value)}
                value={email}
                requited
              />
              <TextFieldStyled
                label="Seu Telefone Aqui"
                type="text"
                placeholder="(00) 00000 0000"
                name="telefone"
                onChange={(e) => SetTelefone(e.target.value)}
                value={telefone}
                requited
              />
              <TextFieldStyled
                label="Suas Dúvidas ? "
                type="text"
                placeholder="Dúvidas"
                name="duvidas"
                onChange={(e) => SetDuvidas(e.target.value)}
                value={duvidas}
                requited
              />
              <div>
                {state.succeeded ? (
                  <Alert className="close" onClick={clearInputs}>
                    <AlertTitle>Enviado Com Sucesso</AlertTitle>
                  </Alert>
                ) : (
                  <Button type="submit">Enviar</Button>
                )}
              </div>
            </Form>
          </MainRight>
        </MainForms>
      </ContactMain>
    </>
  );
};

export default Contact;

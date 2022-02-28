import { Facebook, Instagram, Telegram, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const RightSide = styled.div`
  flex: 1;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const InfoSection = styled.p`
  margin: 20px 0;
`;
const SocialMedia = styled.div`
  display: flex;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
`;

const ListSection = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <LeftSide>
        <Title style={{ margin: 0 }}>Comunidad: </Title>
        <InfoSection>Siguenos en nuestras redes:</InfoSection>
        <SocialMedia>
          <Icon>
            <Instagram />
          </Icon>
          <Icon>
            <Twitter />
          </Icon>
          <Icon>
            <Facebook />
          </Icon>
          <Icon>
            <Telegram />
          </Icon>
        </SocialMedia>
      </LeftSide>
      <Center>
        <Title>Quiénes somos</Title>
        <ListSection>
          <ListItem>Quiénes somos</ListItem>
          <ListItem>Condiciones</ListItem>
          <ListItem>Marcas</ListItem>
          <ListItem>Afiliados</ListItem>
          <ListItem>Accesorios</ListItem>
          <ListItem>Nuestras tiendas</ListItem>
          <ListItem>Centros educativos</ListItem>
          <ListItem>Premium</ListItem>
          <ListItem>Aviso legal</ListItem>
          <ListItem>Privacidad</ListItem>
        </ListSection>
      </Center>
      <RightSide></RightSide>
    </Container>
  );
};

export default Footer;

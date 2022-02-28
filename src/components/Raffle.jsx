import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #495371;
  flex-direction: column;
  color: #fff;
`;
const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
`;
const InfoSection = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Box = styled.div`
  height: 110px;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  border: 1px solid lightgrey;
  width: 60%;
  height: 50px;
  margin-bottom: 20px;
  outline: none;
  text-align: center;
`;
const Button = styled.button`
  width: 200px;
  cursor: pointer;
  padding: 15px;
  background-color: #ffd32d;
  border: none;
  font-weight: 800;
`;

const Raffle = () => {
  return (
    <Container>
      <Title>SORTEO</Title>
      <InfoSection>¡Sorteamos una targeta regalo de 100€!</InfoSection>
      <InfoSection style={{ fontSize: "1.5rem" }}>
        Participa ahora introduciendo tu email
      </InfoSection>
      <Box>
        <Input placeholder="Introduce tu email"></Input>
        <Button>¡PARTICIPA!</Button>
      </Box>
    </Container>
  );
};

export default Raffle;

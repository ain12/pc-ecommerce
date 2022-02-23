import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 2px;
  position: relative;
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const Box = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 18px;
`;
const Button = styled.button`
  padding: 12px;
  fonts-size: 25px;
  background-color: #ffd32d;
  color: #000;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

const Category = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Box>
        <Title>{item.title}</Title>
        <Button>COMPRAR</Button>
      </Box>
    </Container>
  );
};

export default Category;

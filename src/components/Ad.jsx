import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  color: #fff;
  background-color: #98b4aa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
`;

const Ad = () => {
  return (
    <Container>
      Envios gratuitos a partir de 50€ / Devoluciones gratuitas
    </Container>
  );
};

export default Ad;

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderProducts } from "../products";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  position: relative;
`;

const ArrowIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f1e0ac;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  opacity: 0.6;
  left: ${(props) => props.itemPosition === "left" && "15px"};
  right: ${(props) => props.itemPosition === "right" && "15px"};
  cursor: pointer;
  margin: auto;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.index * -100}vw);
  transition: all 1.6s ease;
`;

const SlideContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 60px;
`;
const DescItem = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
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

const Img = styled.img`
  height: 80%;
`;

const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Slider = () => {
  const [index, setIndex] = useState(0);

  let handleEvent = (e) => {
    if (e === "left") {
      setIndex(index > 0 ? index - 1 : 2);
    } else {
      setIndex(index < 2 ? index + 1 : 0);
    }
  };

  return (
    <Container>
      <ArrowIcon itemPosition="left" onClick={() => handleEvent("left")}>
        <ArrowLeftOutlined />
      </ArrowIcon>
      <Wrapper index={index}>
        {sliderProducts.map((item) => (
          <SlideContent>
            <ImageContainer>
              <Img src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <DescItem>{item.description}</DescItem>
              <Button>ENTRAR</Button>
            </InfoContainer>
          </SlideContent>
        ))}
      </Wrapper>
      <ArrowIcon itemPosition="right" onClick={() => handleEvent("right")}>
        <ArrowRightOutlined />
      </ArrowIcon>
    </Container>
  );
};

export default Slider;

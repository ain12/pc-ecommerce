import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import Image from "../asssets/iphone.jpg";

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
  background-color: #98b4aa;
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

const Img = styled.img`
  height: 85%;
`;

const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Slider = () => {
  return (
    <Container>
      <ArrowIcon itemPosition="left">
        <ArrowLeftOutlined />
      </ArrowIcon>
      <Wrapper>
        <SlideContent>
          <ImageContainer>
            <Img src={Image} />
          </ImageContainer>
          <InfoContainer>
            <Title>FINANCIACIÓN IPHONE </Title>
            <DescItem>Hasta 24 meses al 0% TAE</DescItem>
            <Button>GET NOW</Button>
          </InfoContainer>
        </SlideContent>
      </Wrapper>
      <ArrowIcon itemPosition="right">
        <ArrowRightOutlined />
      </ArrowIcon>
    </Container>
  );
};

export default Slider;

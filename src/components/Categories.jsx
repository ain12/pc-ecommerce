import React from "react";
import styled from "styled-components";
import { categories } from "../products";
import Category from "./Category";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Category item={item} />
      ))}
    </Container>
  );
};

export default Categories;

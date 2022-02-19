import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 60px;
`;
const WrapperContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 25px;
  flex: 1;
`;

const CenterSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled.div`
  display: flex;
  border: 1px solid lightgrey;
  padding: 5px;
`;

const InputSearch = styled.input`
  border: none;
  outline: none;
  width: 300px;
`;

const Logo = styled.h1`
  margin-left: 25px;
  font-weight: bold;
  font-size: 3rem;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <WrapperContainer>
        <LeftSide>
          <Logo>PCbits</Logo>
        </LeftSide>
        <CenterSide>
          <SearchContainer>
            <InputSearch />
            <Search style={{ color: "#495371", fontsize: 16 }} />
          </SearchContainer>
        </CenterSide>
        <RightSide>
          <MenuItem>Register</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </RightSide>
      </WrapperContainer>
    </Container>
  );
};

export default Navbar;

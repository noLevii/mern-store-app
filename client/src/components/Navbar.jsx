import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";
import { clearCart } from "../redux/cartRedux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(logout());
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <StyledLink to="/">AJOLOTECH</StyledLink>
          </Logo>
        </Center>
        <Right>
          {!user && (
            <>
              <MenuItem>
                <StyledLink to="/register">REGISTRARSE</StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/login">INICIAR SESION</StyledLink>
              </MenuItem>
            </>
          )}
          {user && (
            <>
              <MenuItem>Bienveido: {user.username}</MenuItem>
              <MenuItem onClick={handleLogout}>CERRAR SESIÓN</MenuItem>
            </>
          )}
          <StyledLink to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

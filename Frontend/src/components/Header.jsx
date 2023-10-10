import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #FF5A5F;
  color: #fff;
  padding: 20px;
`;

const Nav = styled.nav`

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`

  font-size: 24px;
`;

const MenuList = styled.ul`

  list-style: none;
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.li`

  font-size: 18px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      
      <Nav>
        <Logo>
          <Link to="/">FUNNY SOCKS</Link>
        </Logo>
        <MenuList>
          <MenuItem>
            <Link to="/">Inicio</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">Carrito</Link>
          </MenuItem>
          
          <MenuItem>
            <Link to="/register">Registrarse</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">Iniciar sesion</Link>
          </MenuItem>
        </MenuList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

 

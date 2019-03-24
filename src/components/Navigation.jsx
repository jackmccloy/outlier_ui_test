import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Nav = styled.nav`
  width: 200px;
  border-right: 2px solid #999;
  background: #eee;
`;

const NavbarUl = styled.ul`
  list-style: none;
  padding: 8px;
  margin: 0;
`;

const NavbarLi = styled.li`
  margin: 4px;
  padding: 4px;
  background: #ccc;
  border-bottom: 2px solid #ccc;

  :hover {
    background: #ddd;
    border-bottom: 2px solid #999;    
  }

  > a {
    width: 100%;
    text-decoration: none;
    color: #333;
    padding: 4px;
    display: block;
  }
`;

const Navigation = () => (
  <Nav>
    <NavbarUl>
      <NavbarLi><Link to="/launches">Launches</Link></NavbarLi>
    </NavbarUl>
  </Nav>
);

export default Navigation;

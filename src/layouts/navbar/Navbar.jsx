import React from 'react';
import { styled } from 'styled-components';
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  overflow: hidden;
  background-color: #333;
  
  li {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
    
    @media (max-width: 639px){
      float: none;
      width: 100%;
    }
  }
  
  li:hover {
    background-color: #ddd;
    color: black;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <li><Link to="/">Users</Link></li>
            <li><Link to="/createuser">Create User</Link></li>
        </NavbarContainer>
    );
};

export default Navbar;
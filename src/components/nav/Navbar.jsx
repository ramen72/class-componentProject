import React from 'react';
import styled from 'styled-components';
import Container from './../common/Container';
import NavItem from './NavItem';

const Navbar = () => {
    return (
        <>
            <Background>
                <Container>
                    <SideBySide>
                        <Logo>Logo</Logo>
                        <MenuItem>
                        <NavItem/>
                        </MenuItem>
                        <GroupButtons>Button</GroupButtons>
                    </SideBySide>
                </Container>
            </Background>
        </>
    );
};

export default Navbar;

const Background = styled.div`
  background-color: red;
  height: 50px;
`;
const SideBySide = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Logo = styled.div`
  width: 10%;
  background-color: green;
`;
const MenuItem = styled.div`
  width: 70px;
  background-color: yellow;
  `;
const GroupButtons = styled.div`
width: 20px;
background-color: purple;
`;

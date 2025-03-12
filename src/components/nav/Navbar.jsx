import React from 'react';
import styled from 'styled-components';
import Container from './../common/Container';
import NavItem from './NavItem';
import logo from '../../assets/images/Logo.svg'

const Navbar = () => {
    return (
        <>
            <Background>
                <Container>
                    <SideBySide>
                        <Logo>
                          <img src={logo} alt="" />
                        </Logo>
                        <MenuItem>
                          <NavItem/>
                        </MenuItem>
                        <GroupButtons>
                           <Button>Login</Button>
                           <Button $bg>Sign up</Button>
                          </GroupButtons>
                    </SideBySide>
                </Container>
            </Background>
        </>
    );
};

export default Navbar;

const Background = styled.div`
  padding: 22px 0;
  border: 1px dotted red;
  background: #F5F7FA;
`;
const SideBySide = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Logo = styled.div`
  
`;
const MenuItem = styled.div`
  
  `;
const GroupButtons = styled.div`
  display: flex;
  column-gap: 20px;
`;
const Button = styled.button`
  background: ${props => props.$bg ? "#4CAF4F" : "#fff"};
  color: ${props => props.$bg ? "#fff" : "#4CAF4F"};
  padding: 10px 20px;
  border: 1px dotted #4CAF4F;
  border-radius: 6px;
  -webkit-border-radius:S
  &:hover{
    background: #4CAF4F
}
`;

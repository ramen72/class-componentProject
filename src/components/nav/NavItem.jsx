import React from 'react';
import styled from 'styled-components';

const NavItem = () => {
    return (
        <div>
             <UnOrderList>
                <UnOrderListItem>Home</UnOrderListItem>
                <UnOrderListItem>Service</UnOrderListItem>
                <UnOrderListItem>Feature</UnOrderListItem>
                <UnOrderListItem>Product</UnOrderListItem>
                <UnOrderListItem>Testimonial</UnOrderListItem>
                <UnOrderListItem>FAQ</UnOrderListItem>
            </UnOrderList>
        </div>
    );
};

export default NavItem;
const UnOrderList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 50px;
    list-style-type: none;
    font-size: 16px;
    font-weight: 500;
    color: #18191F;
`;
const UnOrderListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 50px;
    list-style-type: none;
    font-size: 16px;
    font-weight: 500;
    color: #18191F;
    transition: all linear 0.3s;
    -webkit-transition: all linear 0.3s;
    -moz-transition: all linear 0.3s;
    -ms-transition: all linear 0.3s;
    -o-transition: all linear 0.3s;
    &:hover{
        color: #4CAF4F;
    }
`;

import React from 'react';
import styled from 'styled-components';

const NavItem = () => {
    return (
        <div>
             <UnOrderList>
                <li>Home</li>
                <li>Service</li>
                <li>Feature</li>
                <li>Product</li>
                <li>Testimonial</li>
                <li>FAQ</li>
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
`;

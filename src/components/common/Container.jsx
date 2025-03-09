import React from 'react';
import styled from 'styled-components';

const Container = ({children}) => {
    return (
        <CommonContainer>
            {children}
        </CommonContainer>
    );
};

export default Container;

const CommonContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  border: 1px solid green;
`;
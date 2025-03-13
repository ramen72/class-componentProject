import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import illustration from '../../assets/images/Illustration.svg'

const Banner = () => {
    return (
        <BannerWrapper>
            <Container>
                <SideBySide>
                    <Left>
                        <Heading>Lessons and insights <InnerHeading>from 8 years</InnerHeading></Heading>
                        <Paragraph>Where to grow your business as a photographer: site or social media?</Paragraph>
                        <Button $bg>Register</Button>
                    </Left>
                    <Right>
                        <BannerImage src={illustration}/>
                    </Right>
                </SideBySide>
            </Container>
        </BannerWrapper>
    );
};

export default Banner;


const BannerWrapper = styled.div`
    background: #F5F7FA;
    padding: 96px 0;
`;
const Heading = styled.h1`
    font-size: 64px;
    font-weight: 500;
    max-width: 657px;
    line-height: 1.2;
`;
const InnerHeading = styled.span`
    color: #4CAF4F
`;
const Paragraph = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #717171;
    margin: 16px 0;
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
}`;
const SideBySide = styled.div`
  display: flex;
`;
const Left = styled.div`
    width: 60%;
`;
const Right = styled.div`
  width: 40%;
`;
const BannerImage = styled.img`
`;
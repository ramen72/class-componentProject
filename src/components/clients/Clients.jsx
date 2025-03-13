import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import clientLogo1 from '../../assets/images/ClientLogo-1.svg';
import clientLogo2 from '../../assets/images/ClientLogo-2.svg';
import clientLogo3 from '../../assets/images/ClientLogo-3.svg';
import clientLogo4 from '../../assets/images/ClientLogo-4.svg';
import clientLogo5 from '../../assets/images/ClientLogo-5.svg';
import clientLogo6 from '../../assets/images/ClientLogo-6.svg';
import clientLogo7 from '../../assets/images/ClientLogo-7.svg';
import clientIcon1 from '../../assets/images/clientIcon-1.svg';
import clientIcon2 from '../../assets/images/clientIcon-2.svg';
import clientIcon3 from '../../assets/images/clientIcon-3.svg';
import clientBottomPic from '../../assets/images/clientBottomPic.svg';

const Clients = () => {
    return (
        <div>
            <Container>
                <Heading>Out Clients</Heading>
                <Para>We have been working with some Fortune 500+ clients</Para>
                <ClientWrapper>
                    <ClientLogo src={clientLogo1} alt='Client Logo'/>
                    <ClientLogo src={clientLogo2} alt='Client Logo'/>
                    <ClientLogo src={clientLogo3} alt='Client Logo'/>
                    <ClientLogo src={clientLogo4} alt='Client Logo'/>
                    <ClientLogo src={clientLogo5} alt='Client Logo'/>
                    <ClientLogo src={clientLogo6} alt='Client Logo'/>
                    <ClientLogo src={clientLogo7} alt='Client Logo'/>
                </ClientWrapper>
                <Heading $limited>Manage your entire community in a single system</Heading>
                <Para $para1>Who is Nextcent suitable for?</Para>
                <ClientCardWrapper>
                    <ClientCard>
                        <ClientLogo src={clientIcon1}/>
                        <ClientHeading>Membership Organisations</ClientHeading>
                        <Para $client>Our membership management software provides full automation of membership renewals and payments</Para>
                    </ClientCard>
                    <ClientCard>
                        <ClientLogo src={clientIcon2}/>
                        <ClientHeading>National Associations</ClientHeading>
                        <Para $client>Our membership management software provides full automation of membership renewals and payments</Para>
                    </ClientCard>
                    <ClientCard>
                        <ClientLogo src={clientIcon3}/>
                        <ClientHeading>Clubs And Groups</ClientHeading>
                        <Para $client>Our membership management software provides full automation of membership renewals and payments</Para>
                    </ClientCard>
                </ClientCardWrapper>
                <SideBySide>
                    <Left>
                        <ClientLogo src={clientBottomPic}/>
                    </Left>
                    <Right>
                        <ClientHeadingTwo>
                            The unseen of spending three years at Pixelgrade
                        </ClientHeadingTwo>
                        <ParaTwo>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                        </ParaTwo>
                    </Right>
                </SideBySide>
            </Container>
        </div>
    );
};

export default Clients;

const Heading = styled.h2`
    width : ${props => props.$limited ? "542px": "100%"};
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    text-align: center;
    margin: 0 auto;
    margin-top: 40px;
`
const Para = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    margin-top: ${ props => props.$para1 && "10px"};
    margin-top: ${ props => props.$client && "20px"};
    margin-bottom: 40px;
`
const ClientWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 75px;
`
const ClientLogo = styled.img``
const ClientCardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 75px;
`
const ClientCard = styled.div`
    width: 300px;
    height: 260px;
    padding: 10px;
    text-align: center;
`
const ClientHeading = styled.h2`
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
    margin: 0 auto;
    margin-top: 5px;
`
const SideBySide = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 30px;
    padding-bottom: 80px;
`;
const Left = styled.div`
`;
const Right = styled.div`
width: 661px;
`;
const BannerImage = styled.img`
`;
const ClientHeadingTwo = styled.h2`
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    margin-bottom: 10px;
`
const ParaTwo = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`
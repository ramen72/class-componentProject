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
                <Para>Who is Nextcent suitable for?</Para>
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
    margin-top: 3px;
    margin-bottom: 40px;
`
const ClientWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 75px;
`
const ClientLogo = styled.img`

`
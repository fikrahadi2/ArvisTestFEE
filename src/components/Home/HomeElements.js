import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'

export const HomeContainer = styled.div`
    background: #2AD576;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0:
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HomeContent = styled.div`
    z-index: 3;
    max-width: 1350px;
    position: absolute;
    padding 8px 24px;
    display: flex;
    flex-direction: column;
    align-item: center;
`

export const HomeH1 = styled.h1`
    color: #000000;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 760px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HomeP = styled.p`
    color: #000000;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 760px) {
        font-size: 24px;
        padding-left: 0;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
        padding-left: 0;
    }
`

export const HomeBtn = styled.nav`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const HomeBtnLink = styled(LinkR)`
    border-radius: 10px;
    background: #d8d8d8;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #6AE2A0;
        color: #010606;
    }
`
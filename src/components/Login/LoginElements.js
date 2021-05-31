import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'

export const LoginContainer = styled.div`
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

export const LoginH1 = styled.h1`
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
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'

export const LoginContainer = styled.div`
    background: #2AD576;
    display: flex;
    justify-content: center;
    flex-direction: column;
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

export const LoginItem = styled.div`
    margin: 30px;
    background: #2AD576;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    flex-direction: row;

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

export const LoginUsername = styled.div`
    margin: 5px;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3 px rgba(0,0,0,0.2);
    transitions: all 0.2s ease-in-out;
    flex-wrap: wrap;
    

    &:hover {
        transform: scale(1.02);
        transitions: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const LoginPassword = styled.div`
    margin: 5px;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3 px rgba(0,0,0,0.2);
    transitions: all 0.2s ease-in-out;
    flex-wrap: wrap;
    

    &:hover {
        transform: scale(1.02);
        transitions: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const UsernameLabel = styled.p`
    font-size: 1rem;
    margin: 10px;
    text-align: center;
`

export const PasswordLabel = styled.p`
    font-size: 1rem;
    margin: 10px;
    text-align: center;
`

export const UsernameInput = styled.input`
    font-size: 1rem;
    margin: 10px;
    text-align: center;
`

export const PasswordInput = styled.input`
    font-size: 1rem;
    margin: 10px;
    text-align: center;
`

export const LoginBtn = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const LoginBtnLink = styled(LinkR)`
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
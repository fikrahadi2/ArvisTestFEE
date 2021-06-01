import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'

export const KeranjangContainer = styled.div`
    background: #2AD576;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    flex-direction: column;

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

export const KeranjangH1 = styled.h1`
    color: #000000;
    font-size: 48px;
    text-align: center;
    margin-top: 20px;

    @media screen and (max-width: 760px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const KeranjangH2 = styled.h2`
    color: #000000;
    font-size: 32px;
    text-align: center;
    margin-top: 20px;

    @media screen and (max-width: 760px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const KeranjangItem = styled.div`
    margin: 30px;
    background: #2AD576;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    flex-direction: column;

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

export const KeranjangWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    
`

export const KeranjangTabel = styled.div`
    margin: 5px;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    max-height: 100px;
    width: 1200px;
    padding: 30px;
    box-shadow: 0 1px 3 px rgba(0,0,0,0.2);
    transitions: all 0.2s ease-in-out;
    

    &:hover {
        transform: scale(1.02);
        transitions: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const KeranjangFoto = styled.img`
    border-radius: 10px;
    height: 80px;
    width: 80px;
    margin-bottom: 10px;

    @media screen and (max-width: 992px) {
        height: 130px;
        width: 130px;
    }

    @media screen and (max-width: 768px) {
        height: 120px;
        width: 120px;
    }

    @media screen and (max-width: 480px) {
        height: 90px;
        width: 90px;
    }
`

export const KeranjangNama = styled.h2`
    font-size: 1rem;
    text-align: center;
    width: 200px;
`

export const KeranjangHarga = styled.p`
    font-size: 1rem;
    text-align: center;
    width: 200px;
`

export const KeranjangBanyak = styled.p`
    font-size: 1rem;
    text-align: center;
    width: 200px;
`

export const KeranjangHapus = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const KeranjangHapusLink = styled(LinkR)`
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
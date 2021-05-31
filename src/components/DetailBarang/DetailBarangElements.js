import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'

export const DetailContainer = styled.div`
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

export const DetailItem = styled.div`
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

export const DetailWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    
`

export const DetailWrapper2 = styled.div`
    position: relative;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    
`

export const DetailWrapper3 = styled.div`
    position: relative;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
`

export const DetailTabel = styled.div`
    margin: 10px;
    background: #fff;
    border-radius: 10px;
    height: 140px;
    box-shadow: 0 1px 3 px rgba(0,0,0,0.2);
    transitions: all 0.2s ease-in-out;
    flex-wrap: wrap;
    width: 945px;
    

    &:hover {
        transform: scale(1.02);
        transitions: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const DetailTabel2 = styled.div`
    margin: 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 50px;
    padding: 30px;
    box-shadow: 0 1px 3 px rgba(0,0,0,0.2);
    transitions: all 0.2s ease-in-out;
    flex-wrap: wrap;
    width: 450px;
    

    &:hover {
        transform: scale(1.02);
        transitions: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const DetailTabel3 = styled.div`
    margin: 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 50px;
    padding: 30px;
    box-shadow: 0 1px 3 px rgba(0,0,0,0.2);
    transitions: all 0.2s ease-in-out;
    flex-wrap: wrap;
    width: 225px;
    

    &:hover {
        transform: scale(1.02);
        transitions: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const DetailTabel4 = styled.div`
    margin: 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 50px;
    padding: 30px;
    box-shadow: 0 1px 3 px rgba(0,0,0,0.2);
    transitions: all 0.2s ease-in-out;
    flex-wrap: wrap;
    width: 695px;
    

    &:hover {
        transform: scale(1.02);
        transitions: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const DetailFoto = styled.img`
    margin: 10px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 300px;
    padding: 30px;
    box-shadow: 0 1px 3 px rgba(0,0,0,0.2);
    transitions: all 0.2s ease-in-out;
    flex-wrap: wrap;
    width: 300px;


    &:hover {
        transform: scale(1.02);
        transitions: all 0.2s ease-in-out;
        cursor: pointer;
    }

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

export const DetailH1 = styled.h1`
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

export const DetailNama = styled.h2`
    font-size: 1.2rem;
    margin: 10px;
    text-align: left;
`

export const DetailHarga = styled.p`
    font-size: 1.2rem;
    margin: 10px;
    text-align: center;
`

export const DetailStok = styled.p`
    font-size: 1.2rem;
    margin: 10px;
    text-align: center;
`

export const DetailDeskripsi = styled.h2`
    font-size: 1.2rem;
    margin: 20px;
    text-align: left;
`

export const DetailDeskripsi2 = styled.p`
    font-size: 1rem;
    margin: 20px;
    text-align: left;
`

export const DetailAdd = styled.nav`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const DetailAddLink = styled(LinkR)`
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 60px;
    transitions: all 0.2s ease-in-out;
    flex-wrap: wrap;

    background: #22AA5F;
    white-space: nowrap;
    padding: 19px 40px;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    width: 225px;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    box-shadow: 0 1px 3 px rgba(0,0,0,0.2);

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #6AE2A0;
        color: #010606;
        transform: scale(1.05);
        cursor: pointer;
    }
    
`
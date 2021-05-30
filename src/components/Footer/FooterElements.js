import styled from 'styled-components'

export const FooterSection = styled.nav`
    background: #d8d8d8;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1350px
`;

export const FooterPhoto = styled.img`
    border-radius: 50%;
    width: 80px;
    height: 80px;
`

export const FooterMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width:760px) {
        display: none;
    }
`

export const FooterItem = styled.li`
    height: 80px;
    align-iitems: center;
`

export const FooterLinks = styled.a`
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #5FBA56;
    }
    &:hover {
        color: #2AD576;
    }
`

export const FooterText = styled.p`
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
`

export const FooterMenuText = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width:760px) {
        display: none;
    }
`
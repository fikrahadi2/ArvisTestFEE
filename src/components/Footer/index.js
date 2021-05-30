import React from 'react';
import {FooterSection, FooterContainer, FooterPhoto, FooterMenu, FooterItem, FooterLinks, FooterText, FooterMenuText} from './FooterElements';

const Footer = () => {
    return (
        <>
            <FooterSection>
                <FooterContainer>
                    <FooterMenuText>
                        <FooterItem>
                            <FooterText>Created by:</FooterText>
                        </FooterItem>
                        <FooterItem>
                            <FooterText>Fikra Hadi Ramadhan</FooterText>
                        </FooterItem>
                        <FooterItem>
                            <FooterText>Teknik Informatika ITB 2018</FooterText>
                        </FooterItem>
                        <FooterItem>
                            <FooterText>Test Frontend Arvis</FooterText>
                        </FooterItem>
                    </FooterMenuText>
                    <FooterMenu>
                        <FooterItem>
                            <FooterPhoto alt="fotohadi" src="/Hadi.jpg"/>
                        </FooterItem>
                        <FooterItem>
                            <FooterLinks href="https://instagram.com/fikrahadi" target="_blank">Instagram</FooterLinks>
                        </FooterItem>
                        <FooterItem>
                            <FooterLinks href="https://www.linkedin.com/in/fikrahadi/" target="_blank">Linkedin</FooterLinks>
                        </FooterItem>
                    </FooterMenu>
                </FooterContainer>
            </FooterSection>
        </>
    )
}

export default Footer;

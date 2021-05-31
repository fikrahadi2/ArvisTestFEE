import React from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import {FaBars } from 'react-icons/fa';
import { Link } from 'react-router';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        Toko Hadi
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">BERANDA</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="/pages/list">LIST BARANG</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="cart">KERANJANG</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/login">LOGIN</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;

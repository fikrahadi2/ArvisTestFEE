import React from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import {FaBars } from 'react-icons/fa';
import {Link} from 'react-router-dom';

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
                            <NavLinks to='/index'>BERANDA</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/list'>LIST BARANG</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/keranjang'>KERANJANG</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/login'>LOGIN</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;

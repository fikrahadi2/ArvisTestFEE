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
                            <NavLinks to="/">BERANDA</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={{pathname: '/pages/list'}}>LIST BARANG</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks path='/keranjang'>KERANJANG</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to={{pathname: '/login'}}>LOGIN</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;

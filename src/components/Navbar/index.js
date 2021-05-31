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
                            <NavLinks href="../../pages/ListBarang/">LIST BARANG</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="cart">KERANJANG</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavLink to="/login">LOGIN</NavLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

function NavLink({ to, children }: NavLinkProp) {
    return (
      <NavBtnLink>
        <Link href={to} passHref>
          {children}
        </Link>
      </NavBtnLink>
    );
  }

export default Navbar;

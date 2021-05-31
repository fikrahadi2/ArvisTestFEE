import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="beranda" onClick={toggle}>
                        BERANDA
                    </SidebarLink>
                    <SidebarLink href="/ListBarang/index" onClick={toggle}>
                        LIST BARANG
                    </SidebarLink>
                    <SidebarLink to="keranjang" onClick={toggle}>
                        KERANJANG
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/login">
                        LOGIN
                    </SidebarRoute> 
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

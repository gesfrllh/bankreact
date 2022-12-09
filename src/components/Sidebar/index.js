import React from 'react'
import {SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoute 
} from'./SidebarElements';

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to='discover' onClick={toggle}>
                    Discover
                </SidebarLink>
                <SidebarLink to='services' onClick={toggle}>
                    Services
                </SidebarLink>
                <SidebarLink to='signup' onClick={toggle}>
                    Sign Up
                </SidebarLink>
            </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to='/sign' onClick={toggle}>Sign In</SidebarRoute>
                </SidebarBtnWrap>
        </SidebarWrapper>
  </SidebarContainer>
  )
}

export default Sidebar;
import {
    SidebarContainer,
    SidebarMenuContainer,
    StyledNavLink,
    LogoContainer,
    LogoOut,
  } from './SideStyles';
  import HomeIcon from '@mui/icons-material/Home';
  import { useNavigate } from 'react-router-dom';
  import React, { useState, useEffect } from 'react';
  import Icon from '@mui/material/Icon';  
  import AppsIcon from '@mui/icons-material/Apps';
  import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
  export default function Sidebar(props) {
    var icons = [
        HomeIcon,
        AppsIcon,
        ManageAccountsIcon
    ];
    const [isActive, setActive] = useState(null);
  
    const toggleClass = (index) => {
      setActive(index);
    };
    const navigate = useNavigate();

    return (
      <SidebarContainer act={true}>
        <SidebarMenuContainer>
            {icons.map(function (item, index) {
                const Icon = item
              return (
                <Icon style={{color:'white'}}/>
              );
            })}
        </SidebarMenuContainer>
      </SidebarContainer>
    );
  }
  
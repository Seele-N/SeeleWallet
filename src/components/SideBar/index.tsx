import React from 'react'
import styled from 'styled-components'
import {Segment,
    Menu,
    Image,
    Icon, 
    Container,
    Dropdown,
    MenuItemProps,
    Sidebar,
    SidebarProps} from 'semantic-ui-react'
import AppMenu from '../AppMenu'

const StyledSideBar = styled.div`

  flex-direction: column;
  display: flex;
  height: calc(100%);
  min-width: 252px;
  background: #f2f7f5;
  flex-wrap: wrap;
  text-align: center;
  box-shadow: 0px 12px 29px -10px rgba(17, 139, 128, 0.25);

`
/*
const StyledSideBar = styled.div`
  align-items: stretch;
  flex-direction: column;
  display: flex;
  height: calc(100%);
  min-height: calc(100%);
  width: 252px;
  flex-wrap: wrap;
  background: #1c3e83;
  justify-content: space-between;
  text-align: center;
  color:#1c3e83;
  float: left;
`
*/
//<AppMenu/>
const SideBar: React.FC = () => {
    return (
      <StyledSideBar>
        <AppMenu/>
      </StyledSideBar>
    )
  }

  export default SideBar
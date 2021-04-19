
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
import TopMenu from '../TopMenu'

const StyledTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme.topBarSize}px;
  width: 100%;
  flex-wrap: wrap;
`

const Footnote = styled.div`
  width: 100%;
  font-size: 14px;
  padding: 8px 20px;
  color: #bdbdbd;
  border-top:  solid 1px #bdbdbd;
`;

const TopBar: React.FC = () => {
    return (
      <StyledTopBar>
            <TopMenu/>
            <Footnote/>
      </StyledTopBar>
    )
  }

  export default TopBar
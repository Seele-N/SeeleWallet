import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { isMobile, isScreen750to1440 } from '../../utils/screen'
import { useTranslation } from 'react-i18next'
import i18n,{changeLanguage} from '../../utils/i18n'
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
  position: fixed;
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: right;
  height: ${(props) => props.theme.topBarSize}px;
  min-height: ${(props) => props.theme.topBarSize}px;
  width: 100%;
  box-shadow: 0px 2px 8px rgba(48, 64, 79, 0.25);
`

const AppTopBar: React.FC = () => {
    return (
      <StyledTopBar>
            <Segment  attached= 'top' style={{margin: 0,height: '100%'}}>
            <Menu borderless secondary size='large' fixed= 'top'>
            {!isMobile() && (
                        <Menu.Item position='right'>
                            <Dropdown item icon={{name:'user circle',size:'big'}}>
                                <Dropdown.Menu direction='left'>
                                    <Dropdown.Item as={Link}  value='transactions' onClick = {()=>{
                                        changeLanguage('en')
                                        }} >English</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item as={Link}  value='transactions' onClick = {()=>{
                                        changeLanguage('zh')
                                        }} >中文</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>
                )
            }
            {isMobile() && (
                <Dropdown item icon={{name:'user circle',size:'big'}}>
                    <Dropdown.Menu direction='left'>
                        <Dropdown.Item as={Link}  value='transactions' onClick = {()=>{
                            changeLanguage('en')
                            }} >English</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item as={Link}  value='transactions' onClick = {()=>{
                            changeLanguage('zh')
                            }} >中文</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            )}
      </Menu>
      </Segment>
      </StyledTopBar>
    )
  }

  export default AppTopBar
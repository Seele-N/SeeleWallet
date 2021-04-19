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
  display: flex;
  align-items: center;
  justify-content: right;
  height: ${(props) => props.theme.topBarSize}px;
  min-height: ${(props) => props.theme.topBarSize}px;
  width: 100%;
`

const AppTopBar: React.FC = () => {
    return (
      <StyledTopBar>
            <Menu borderless secondary size='large' fixed= 'top'>
            {!isMobile() && (
                        <Menu.Item position='right'>
                            <Dropdown item simple  text={i18n.t('menu.language')}>
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
                <Dropdown item simple text={i18n.t('menu.language')}>
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
      </StyledTopBar>
    )
  }

  export default AppTopBar

import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Menu,Image, Container, Dropdown,MenuItemProps,DropdownItemProps,Label,Header} from 'semantic-ui-react'
import logo from '../../assets/images/seelen.png'
import {Media} from '../../utils/media'
import { isMobile, isScreen750to1440 } from '../../utils/screen'
import { useTranslation } from 'react-i18next'
import i18n,{changeLanguage} from '../../utils/i18n'
import styled from 'styled-components'

const Logo: React.FC = () => {
    return (
      <StyledLogo to="/">
        <img
          src={logo}
          height="40"
          style={{
            marginTop: -4,
          }}
          alt="logo"
        />
        <StyledText>Seele Wallet</StyledText>
      </StyledLogo>
    )
  }
  
  const StyledLogo = styled(Link)`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0;
    min-height: 44px;
    min-width: 44px;
    padding: 0;
    text-decoration: none;
  `
  
  const StyledText = styled.span`
    color: #070707;
    text-decoration: none;
    font-size: 22px;
    font-weight: 900;
    margin-left: 10px;

  `

const TopMenu: React.FC = () => {
    const [t] = useTranslation()
    const [activeItem,setActiveItem] = useState('home')
    const handleItemClick = (e:any, {name}:MenuItemProps) => {setActiveItem(name)}
    const handleDropdownItemClick = (e:any, {value}:DropdownItemProps) => {setActiveItem(value.toString())}
    return (
      <Menu borderless secondary size='large'>
        <Container>
            <Logo/>
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
        </Container>
      </Menu>
    )
}
export default TopMenu
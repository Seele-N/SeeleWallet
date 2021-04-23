
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Menu,Icon, Container, Dropdown,MenuItemProps,Divider,DropdownItemProps,Label,Header} from 'semantic-ui-react'
import logo from '../../assets/images/seelen.png'
import {Media} from '../../utils/media'
import { isMobile, isScreen750to1440 } from '../../utils/screen'
import { useTranslation } from 'react-i18next'
import i18n,{changeLanguage} from '../../utils/i18n'
import styled from 'styled-components'
import './index.css';
import Spacer from '../Spacer'

const StyledFooter = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledNav = styled.div`
  align-items: left;
  display: flex;
  justify-content: left;
  flex-direction: column;
`;


const StyledLink = styled.a`
  align-items: left;
  display: flex;
  justify-content: left;
  margin: 0;
  color: #5c5c5e;
  font-weight: 700;
  padding-left: 16px;
  padding-right: 16px;
  text-decoration: none;
  &:hover {
    color: #0f0f0f;
  }
`;

function Nav() {
  return (
    <StyledNav>
      
      {isMobile?(
        <StyledLink  href="https://discord.gg/bNN5Ae">
          <Icon name= 'discord' size= 'large'/>Discord
        </StyledLink>
      ):(
        <StyledLink target="_blank" href="https://discord.gg/bNN5Ae">
          <Icon name= 'discord' size= 'large'/>Discord
        </StyledLink>
      )}

    <Spacer size='md'/>
      {isMobile?(
        <StyledLink
          href="https://github.com/Seele-N/NervLedger-Contract"
        >
         <Icon name= 'github' size= 'large'/> Github
        </StyledLink>
      ):(
        <StyledLink
          target="_blank"
          href="https://github.com/Seele-N/NervLedger-Contract"
        >
          <Icon name= 'github' size= 'large'/>Github
        </StyledLink>
      )}

    <Spacer size='md'/>
      {isMobile?(
        <StyledLink  href="https://twitter.com/NevrLedger">
          <Icon name= 'twitter' size= 'large'/>Twitter
        </StyledLink>
      ):(
        <StyledLink target="_blank" href="https://twitter.com/NevrLedger">
          <Icon name= 'twitter' size= 'large'/>Twitter
        </StyledLink>
      )}
    </StyledNav>
  );
}

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

const StyledItem = styled.div`
    align-items: left;
    display: flex;
    justify-content: left;
    margin: 0;
    text-decoration: none;
  `

const AppMenu: React.FC = () => {
    const [t] = useTranslation()
    const [activeItem,setActiveItem] = useState('home')
    const handleItemClick = (e:any, {name}:MenuItemProps) => {setActiveItem(name)}
    
    return (
        <Menu borderless vertical stackable fixed='left' size='large' className= 'sidemenu'>
            <Spacer size='sm'/>
            <Spacer size='sm'/>
            <Logo/>   
            <Label color='teal'>
                testnet-alpha
            </Label>
            <Divider/>
            <Menu.Item name='home'
            active={activeItem === 'home'}
            as={Link}
            to='/'
            onClick = {handleItemClick}
            >
                <StyledItem>
                    <Header as='h4'><Icon name= 'chart pie' color= 'teal'/>Home</Header>
                </StyledItem>
            </Menu.Item>

            <Menu.Item name='bridge'
            active={activeItem === 'bridge'}
            as={Link}
            to='/bridge'
            onClick = {handleItemClick}
            >
                <StyledItem>
                    <Header as='h4'><Icon name= 'block layout' color= 'teal'/>Bridge</Header>
                </StyledItem>
            </Menu.Item>


            
            <Menu.Item name='stake'
            active={activeItem === 'stake'}
            as={Link}
            to='/stake'
            onClick = {handleItemClick}
            >
                <StyledItem>
                    <Header as='h4'><Icon name= 'gem' color= 'teal'/>Stake</Header>
                </StyledItem>
            </Menu.Item>
            <Menu.Item name='validators'
            active={activeItem === 'validators'}
            as={Link}
            to='/validators'
            onClick = {handleItemClick}
            >
                <StyledItem>
                    <Header as='h4'><Icon name= 'users' color= 'teal'/>Validators</Header>
                </StyledItem>
            </Menu.Item>
            <Menu.Item name='governance'
            active={activeItem === 'governance'}
            as={Link}
            to='/governance'
            onClick = {handleItemClick}
            >
                <StyledItem>
                    <Header as='h4'><Icon name= 'university' color= 'teal'/>Governance</Header>
                </StyledItem>
            </Menu.Item>
            <Menu.Item name='apps'
            active={activeItem === 'apps'}
            as={Link}
            to='/apps'
            onClick = {handleItemClick}
            >
                <StyledItem>
                    <Header as='h4'><Icon name= 'cloud' color= 'teal'/>Apps</Header>
                </StyledItem>
            </Menu.Item>
            <Menu.Item name='setting'
            active={activeItem === 'setting'}
            as={Link}
            to='/setting'
            onClick = {handleItemClick}
            >
                <StyledItem>
                    <Header as='h4'><Icon name= 'cog' color= 'teal'/>Setting</Header>
                </StyledItem>
            </Menu.Item>
            <Divider/>
            <Spacer size='sm'/>
            <Nav/>
            <Spacer size='sm'/>
            <Divider/>
            <p style={{fontSize: '15px', color: '#5f6061'}}>Copyright © seelen.pro</p>
        </Menu>
    )
}



export default AppMenu
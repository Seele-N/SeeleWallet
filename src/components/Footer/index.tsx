import React from 'react'
import styled from 'styled-components'
import {Segment,Container,Image,List} from 'semantic-ui-react'
import { isMobile, isScreen750to1440 } from '../../utils/screen'
import logo from '../../assets/images/seelen.png'

const StyledFooter = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: ${(props) => props.theme.topBarSize}px;
  width: 100%;
`;

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled.a`
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
          Discord
        </StyledLink>
      ):(
        <StyledLink target="_blank" href="https://discord.gg/bNN5Ae">
          Discord
        </StyledLink>
      )}

      {isMobile?(
        <StyledLink
          href="https://github.com/Seele-N/NervLedger-Contract"
        >
          Github
        </StyledLink>
      ):(
        <StyledLink
          target="_blank"
          href="https://github.com/Seele-N/NervLedger-Contract"
        >
          Github
        </StyledLink>
      )}

      {isMobile?(
        <StyledLink  href="https://twitter.com/NevrLedger">
          Twitter
        </StyledLink>
      ):(
        <StyledLink target="_blank" href="https://twitter.com/NevrLedger">
          Twitter
        </StyledLink>
      )}
    </StyledNav>
  );
}

const Footer: React.FC = () => {
  return (
    <StyledFooter>
        <Segment vertical attached='bottom' 
        >
            <Container textAlign='center'>
              <Nav/>
            </Container>
        </Segment>
    </StyledFooter>
  )
}
export default Footer
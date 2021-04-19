import React from 'react'
import {
    Container,
    Segment,
    Grid,
    Header,
    List,
    Image,
    Table,
    Icon,
    Button,
    Label,
  } from 'semantic-ui-react'
  import {Link} from 'react-router-dom'
  import styled from 'styled-components'
  import logo from '../../assets/images/access-img.svg'
  import Spacer from '../../components/Spacer'

  const StyledImage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled.p`
  color: #2e2e2e;
  font-weight: 600;
  text-decoration: none;
  padding-left: 36px;
  padding-right: 36px;
  &:hover {
    color: #e2e1e1;
  }
`;

interface StyledButtonTextProps {
    color: string;
    hovercolor: string;
  }

const StyledButtonText = styled.p<StyledButtonTextProps>`
  color: ${(props) => props.color};
  font-weight: 600;
  text-decoration: none;
  padding-left: 36px;
  padding-right: 36px;
  &:hover {
    color:${(props) => props.hovercolor};
  }
`;

const Welcome: React.FC = () => {
  return (
    <Container>
        <Grid stackable columns={2} verticalAlign='middle'>
            <Grid.Row textAlign='center' verticalAlign='middle'>
                <Grid.Column width= '8' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                    <Container  textAlign='center'>
                        <Header style={{fontSize: '48px',fontWeight: 1000}}>Welcome to SeeleWallet</Header>
                    </Container>
                    <Spacer size='sm'/>   
                    <Container  textAlign='justified'> 
                        <p style={{fontSize: '18px', color: '#5f6061'}}>SeeleWallet is a free,
                        client-side interface helping you interact with SeeleChain. 
                        Our easy-to-use, open-source platform allows you to generate wallets, 
                        interact with smart contracts, and so much more.</p>
                    </Container>
                    <Spacer size='lg'/>
                    <Button color='twitter' size='huge' >
                        <StyledButtonText color= '#fffafa' hovercolor= '#ffffff'>Import Your Wallet</StyledButtonText>
                        </Button>
                    <p style={{ fontSize: '16px',paddingBottom: '0.3em', paddingTop: '0.5em' }}>or</p>
                    <Button color='teal' size='huge' as={Link} to='/newwalletstep1'>
                        <StyledButtonText color= '#2e2e2e' hovercolor= '#e2e1e1'>Create New Wallet</StyledButtonText>
                    </Button>
                    
                </Grid.Column>
                <Grid.Column width= '8' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                    <StyledImage>
                        <Image size='large' src={logo}></Image>
                    </StyledImage>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Container>
  )
}

export default Welcome
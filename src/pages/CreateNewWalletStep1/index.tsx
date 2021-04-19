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
  import styled from 'styled-components'
  import {Link} from 'react-router-dom'
  import Spacer from '../../components/Spacer'
  import Warnimg from '../../assets/images/warn.png'

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

const StyledSegment = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const CreateNewWalletStep1: React.FC = () => {
  return (
      <Container >
          <StyledSegment>
            <Spacer size='sm'/>
            <Segment raised textAlign='center' style={{maxWidth: '600px',borderRadius: '18px',background: '#fff9f5'}}>
                <Spacer size='sm'/>
                <Container  textAlign='center'>
                    <Header as='h2'>CREATE NEW WALLET</Header>
                </Container>
                <Spacer size='sm'/>
                <Image size='small' verticalAlign= 'middle'src={Warnimg}></Image>
                <Spacer size='sm'/>
                <Container  textAlign='justified'> 
                    <p style={{fontSize: '18px', color: '#5f6061'}}>
                        Your backup phrase contains all of the private keys within your wallet.
                        Please write down these 12 words, in order, and keep them somewhere safe offline.
                        This phrase will gives you (or anyone who has it) a way to restore your wallet 
                        and access your funds. In the event that you lose your password or our service 
                        is unavailable, this will be your safety net.</p>
                </Container>
                <Spacer size='md'/>
                <Container  textAlign='justified'> 
                    <p style={{fontSize: '18px', color: '#e23517'}}>
                    If you lose your recovery phrase, you will be unable to recover access to your account</p>
                </Container>
                <Spacer size='lg'/>
                <Grid stackable columns={2} verticalAlign='middle'>
                    <Grid.Row textAlign='center' verticalAlign='middle'>
                        <Grid.Column width= '8'>    
                            <Button  size='large' as={Link} to='/welcome'>
                                <StyledButtonText color= '#000000' hovercolor= '#000000'>Back</StyledButtonText>
                            </Button>
                        </Grid.Column>
                        <Grid.Column width= '8' >
                            <Button color='twitter' size='large' as={Link} to='/newwalletstep2'>
                                <StyledButtonText color= '#fafafa' hovercolor= '#ffffff'>Next</StyledButtonText>
                            </Button> 
                        </Grid.Column>
                    </Grid.Row>  
                </Grid>
            </Segment>
          </StyledSegment>
     </Container>
  )
}

export default CreateNewWalletStep1
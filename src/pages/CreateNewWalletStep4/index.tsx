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
  import Successimg from '../../assets/images/success-kid.png'

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

const CreateNewWalletStep4: React.FC = () => {
  return (
      <Container >
          <StyledSegment>
            <Spacer size='sm'/>
            <Segment raised textAlign='center' style={{maxWidth: '600px',borderRadius: '18px',background: '#fff9f5'}}>
                <Spacer size='sm'/>
                <Container  textAlign='center'>
                    <Header as='h2'>SUCCESSFUL</Header>
                </Container>
                <Spacer size='sm'/>
                <Image size='small' verticalAlign= 'middle'src={Successimg}></Image>
                <Spacer size='md'/>
                <Container  textAlign='center'> 
                    <p style={{fontSize: '18px', color: '#5f6061'}}>
                    You've created your new wallet successfully</p>
                </Container>
                
                <Spacer size='lg'/>
                <Button color='twitter' size='large' as={Link} to='/newwalletstep2'>
                    <StyledButtonText color= '#fafafa' hovercolor= '#ffffff'>Access your wallet now</StyledButtonText>
                </Button>
                
            </Segment>
          </StyledSegment>
     </Container>
  )
}

export default CreateNewWalletStep4
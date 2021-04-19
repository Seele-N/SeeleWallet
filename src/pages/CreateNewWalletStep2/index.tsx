import React,{useState} from 'react'
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
    Modal,
  } from 'semantic-ui-react'
  import styled from 'styled-components'
  import {Link} from 'react-router-dom'
  import Spacer from '../../components/Spacer'
  import WriteNoteimg from '../../assets/images/WriteNote.png'

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

const CreateNewWalletStep2: React.FC = () => {

    const [modalOpened ,setModalOpened ] = useState(false)

  return (
      <Container >
          <StyledSegment>
            <Spacer size='sm'/>
            <Segment raised textAlign='center' style={{maxWidth: '600px',borderRadius: '18px',background: '#fff9f5'}}>
                <Spacer size='sm'/>
                <Container  textAlign='center'>
                    <Header as='h2'>RECOVERY PHRASE</Header>
                </Container>
                <Spacer size='md'/>
                <Container  textAlign='left'>
                    <Header as='h3'>Please back up recovery phrase</Header>
                </Container>
                <Spacer size='sm'/>
                <Container  textAlign='justified'> 
                    <p style={{fontSize: '18px', color: '#1f7dd4'}}>
                    Back up the text below on paper and keep it somewhere secret and save.</p>
                </Container>
                <Header as='h5' color= 'teal' textAlign= 'right'>
                    <Icon link name= 'sync alternate' color= 'teal' size= 'small'/>Reload
                </Header>
                <Segment secondary>
                    <Spacer size='sm'/>
                    <Grid columns={3} verticalAlign='middle'>
                        <Grid.Row textAlign='left' verticalAlign='middle'>
                            <Grid.Column width= '5'> 
                                <p style={{fontSize: '18px', color: '#5f6061'}}>1.aaaaa</p>
                            </Grid.Column>
                            <Grid.Column width= '5'> 
                                <p style={{fontSize: '18px', color: '#5f6061'}}>2.aaaaa</p>
                            </Grid.Column>
                            <Grid.Column width= '5'> 
                                <p style={{fontSize: '18px', color: '#5f6061'}}>3.aaaaa</p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row textAlign='left' verticalAlign='middle'>
                            <Grid.Column width= '5'> 
                                <p style={{fontSize: '18px', color: '#5f6061'}}>4.aaaaa</p>
                            </Grid.Column>
                            <Grid.Column width= '5'> 
                                <p style={{fontSize: '18px', color: '#5f6061'}}>5.aaaaa</p>
                            </Grid.Column>
                            <Grid.Column width= '5'> 
                                <p style={{fontSize: '18px', color: '#5f6061'}}>6.aaaaa</p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row textAlign='left' verticalAlign='middle'>
                            <Grid.Column width= '5'> 
                                <p style={{fontSize: '18px', color: '#5f6061'}}>7.aaaaa</p>
                            </Grid.Column>
                            <Grid.Column width= '5'> 
                                <p style={{fontSize: '18px', color: '#5f6061'}}>8.aaaaa</p>
                            </Grid.Column>
                            <Grid.Column width= '5'> 
                                <p style={{fontSize: '18px', color: '#5f6061'}}>9.aaaaa</p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row textAlign='left' verticalAlign='middle'>
                            <Grid.Column width= '5'> 
                                <p style={{fontSize: '18px', color: '#5f6061'}}>10.aaaaa</p>
                            </Grid.Column>
                            <Grid.Column width= '5'> 
                                <p style={{fontSize: '18px', color: '#5f6061'}}>11.aaaaa</p>
                            </Grid.Column>
                            <Grid.Column width= '5'> 
                                <p style={{fontSize: '18px', color: '#5f6061'}}>12.aaaaa</p>
                            </Grid.Column>
                        </Grid.Row>  
                    </Grid>
                    <Spacer size='sm'/>
                </Segment>
                <Spacer size='sm'/>
                <Grid stackable columns={2} verticalAlign='middle'>
                    <Grid.Row  verticalAlign='middle'>
                        <Grid.Column width= '8'>    
                            <Header as='h5' color= 'teal' textAlign= 'left'>
                                <Icon link name= 'save' color= 'teal' />Save as KeyStore
                            </Header>
                        </Grid.Column>
                        <Grid.Column width= '8' >
                            <Header as='h5' color= 'teal' textAlign= 'right'>
                                <Icon link name= 'save' color= 'teal' />View Private Key
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Spacer size='md'/>
                    <Grid.Row textAlign='center' verticalAlign='middle'>
                        <Grid.Column width= '8'>    
                            <Button  size='large' as={Link} to='/newwalletstep1'>
                                <StyledButtonText color= '#000000' hovercolor= '#000000'>Back</StyledButtonText>
                            </Button>
                        </Grid.Column>
                        <Grid.Column width= '8' >
                            <Button color='twitter' size='large' 
                            onClick= {()=>{
                                setModalOpened(true)
                            }}>
                                <StyledButtonText color= '#fafafa' hovercolor= '#ffffff'>Next</StyledButtonText>
                            </Button> 
                        </Grid.Column>
                    </Grid.Row>  
                </Grid>
            </Segment>
          </StyledSegment>
          <Modal
            onClose={() => setModalOpened(false)}
            onOpen={() => setModalOpened(true)}
            open={modalOpened}
            size= 'tiny'
            >
            <Modal.Header style={{background: '#fff9f5'}}>RECOVERY PHRASE?</Modal.Header>
            <Modal.Content image style={{background: '#fff9f5'}}>
                <Image size='medium' src={WriteNoteimg} wrapped />
                <Modal.Description>
                <p style={{fontSize: '18px', color: '#5f6061'}}>Are you sure you have noted down your Recovery Phrase?</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions style={{background: '#fff9f5'}}>
                <Button onClick={() => setModalOpened(false)}>Cancel</Button>
                <Button as={Link} to='/newwalletstep3' onClick={() => setModalOpened(false)} positive>Ok</Button>
            </Modal.Actions>
            </Modal>
     </Container>
  )
}

export default CreateNewWalletStep2
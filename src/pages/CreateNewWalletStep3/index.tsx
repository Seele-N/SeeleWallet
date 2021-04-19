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

const CreateNewWalletStep3: React.FC = () => {

    const [modalOpened ,setModalOpened ] = useState(false)

  return (
      <Container >
          <StyledSegment>
            <Spacer size='sm'/>
            <Segment raised textAlign='center' style={{maxWidth: '600px',borderRadius: '18px',background: '#fff9f5'}}>
                <Spacer size='sm'/>
                <Container  textAlign='center'>
                    <Header as='h2'>VERIFICATION</Header>
                </Container>
                <Spacer size='md'/>
                <Container  textAlign='center'>
                    <Header as='h4' style={{color: '#5f6061'}}>
                        Verify your Recovery Phrase. Choose each word in the correct order
                    </Header>
                </Container>
                <Spacer size='sm'/>
                
                <Segment secondary>
                    <Spacer size='sm'/>
                    <Grid columns={3} verticalAlign='middle'>
                        <Grid.Row textAlign='left' verticalAlign='middle'>
                            <Grid.Column width= '5'> 
                                <Header as='h4' color= 'teal' textAlign= 'left'>
                                    1.aaaaa
                                    <Icon link name= 'remove' color= 'teal' size= 'tiny'/>
                                </Header>
                            </Grid.Column>
                            <Grid.Column width= '5'> 
                                <Header as='h4' color= 'teal' textAlign= 'left'>
                                    2.aaaaa
                                    <Icon link name= 'remove' color= 'teal' size= 'tiny'/>
                                </Header>
                            </Grid.Column>
                            <Grid.Column width= '5'> 
                                <Header as='h4' color= 'teal' textAlign= 'left'>
                                    3.aaaaa
                                    <Icon link name= 'remove' color= 'teal' size= 'tiny'/>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row textAlign='left' verticalAlign='middle'>
                            <Grid.Column width= '5'> 
                                <Header as='h4' color= 'teal' textAlign= 'left'>
                                    4.aaaaa
                                    <Icon link name= 'remove' color= 'teal' size= 'tiny'/>
                                </Header>
                            </Grid.Column>
                            <Grid.Column width= '5'> 
                                <Header as='h4' color= 'teal' textAlign= 'left'>
                                    5.aaaaa
                                    <Icon link name= 'remove' color= 'teal' size= 'tiny'/>
                                </Header>
                            </Grid.Column>
                            <Grid.Column width= '5'> 
                                <Header as='h4' color= 'teal' textAlign= 'left'>
                                    6.aaaaa
                                    <Icon link name= 'remove' color= 'teal' size= 'tiny'/>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row textAlign='left' verticalAlign='middle'>
                            <Grid.Column width= '5'> 
                                <Header as='h4' color= 'teal' textAlign= 'left'>
                                    7.aaaaa
                                    <Icon link name= 'remove' color= 'teal' size= 'tiny'/>
                                </Header>
                            </Grid.Column>
                            <Grid.Column width= '5'> 
                                <Header as='h4' color= 'teal' textAlign= 'left'>
                                    8.aaaaa
                                    <Icon link name= 'remove' color= 'teal' size= 'tiny'/>
                                </Header>
                            </Grid.Column>
                            <Grid.Column width= '5'> 
                                <Header as='h4' color= 'teal' textAlign= 'left'>
                                    9.aaaaa
                                    <Icon link name= 'remove' color= 'teal' size= 'tiny'/>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row textAlign='left' verticalAlign='middle'>
                            <Grid.Column width= '5'> 
                                <Header as='h4' color= 'teal' textAlign= 'left'>
                                    10.aaaaa
                                    <Icon link name= 'remove' color= 'teal' size= 'tiny'/>
                                </Header>
                            </Grid.Column>
                            <Grid.Column width= '5'> 
                                <Header as='h4' color= 'teal' textAlign= 'left'>
                                    11.aaaaa
                                    <Icon link name= 'remove' color= 'teal' size= 'tiny'/>
                                </Header>
                            </Grid.Column>
                            <Grid.Column width= '5'> 
                                <Header as='h4' color= 'teal' textAlign= 'left'>
                                    12.aaaaa
                                    <Icon link name= 'remove' color= 'teal' size= 'tiny'/>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>  
                    </Grid>
                    <Spacer size='sm'/>
                </Segment>

                <Grid columns={3} verticalAlign='middle'>
                    <Grid.Row textAlign='center' verticalAlign='middle'>
                        <Grid.Column width= '5'> 
                            <Button  basic size='small' style={{width: '100px'}}>aaaaa</Button>
                        </Grid.Column>
                        <Grid.Column width= '5'> 
                            <Button  basic size='small' style={{width: '100px'}}>bbb</Button>
                        </Grid.Column>
                        <Grid.Column width= '5'> 
                            <Button  basic size='small' style={{width: '100px'}}>aaaaabbcc</Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row textAlign='center' verticalAlign='middle'>
                        <Grid.Column width= '5'> 
                            <Button  basic size='small' style={{width: '100px'}}>aaaaa</Button>
                        </Grid.Column>
                        <Grid.Column width= '5'> 
                            <Button  basic size='small' style={{width: '100px'}}>bbb</Button>
                        </Grid.Column>
                        <Grid.Column width= '5'> 
                            <Button  basic size='small' style={{width: '100px'}}>aaaaabbcc</Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row textAlign='center' verticalAlign='middle'>
                        <Grid.Column width= '5'> 
                            <Button  basic size='small' style={{width: '100px'}}>aaaaa</Button>
                        </Grid.Column>
                        <Grid.Column width= '5'> 
                            <Button  basic size='small' style={{width: '100px'}}>bbb</Button>
                        </Grid.Column>
                        <Grid.Column width= '5'> 
                            <Button  basic size='small' style={{width: '100px'}}>aaaaabbcc</Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row textAlign='center' verticalAlign='middle'>
                        <Grid.Column width= '5'> 
                            <Button  basic size='small' style={{width: '100px'}}>aaaaa</Button>
                        </Grid.Column>
                        <Grid.Column width= '5'> 
                            <Button  basic size='small' style={{width: '100px'}}>bbb</Button>
                        </Grid.Column>
                        <Grid.Column width= '5'> 
                            <Button  basic size='small' style={{width: '100px'}}>aaaaabbcc</Button>
                        </Grid.Column>
                    </Grid.Row>  
                </Grid>

                <Spacer size='lg'/>
                <Grid stackable columns={2} verticalAlign='middle'>
                    <Grid.Row textAlign='center' verticalAlign='middle'>
                        <Grid.Column width= '8'>    
                            <Button  size='large' as={Link} to='/newwalletstep2'>
                                <StyledButtonText color= '#000000' hovercolor= '#000000'>Back</StyledButtonText>
                            </Button>
                        </Grid.Column>
                        <Grid.Column width= '8' >
                            <Button color='twitter' size='large' 
                            as={Link} to='/newwalletstep4'
                            onClick= {()=>{
                                setModalOpened(true)
                            }}>
                                <StyledButtonText color= '#fafafa' hovercolor= '#ffffff'>Verify</StyledButtonText>
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
                <Button onClick={() => setModalOpened(false)} positive>Ok</Button>
            </Modal.Actions>
            </Modal>
     </Container>
  )
}

export default CreateNewWalletStep3
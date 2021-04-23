import React,{useState} from 'react'
import {
    Container,
    Segment,
    Grid,
    Header,
    Image,
    Table,
    Icon,
    Divider,
    Button,
    Dropdown,
    Input,
  } from 'semantic-ui-react'
  import {Link} from 'react-router-dom'
  import styled from 'styled-components'

  import seelelogo from '../../assets/images/seelen.png'
  import snplogo from '../../assets/images/snp.png'
  import switchimg from '../../assets/images/switch.svg'
  import Spacer from '../../components/Spacer'
  import i18n from '../../utils/i18n'


const StyledSegment = styled(Segment)`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 414px;
  align-content: center;
`;

const tokenOptions = [
    {
      key: 'snp',
      text: 'SNP',
      value: 'snp',
      image: {  avatar: true,src: snplogo },
    },
    {
      key: 'seele',
      text: 'SEELE',
      value: 'seele',
      image: {  avatar: true,src: seelelogo },
    },
  ]

interface PanProps {
    isFrom?: boolean;
  }

const EthPan: React.FC<PanProps> = ({isFrom = false}) => {
    return (
        <Segment>
            <Header as ='h4'>Network:Ethereum</Header>
            <Divider/>
            <Grid stackable columns={2} verticalAlign='middle'>
                <Grid.Row textAlign='left' verticalAlign='middle' style={{ paddingTop: '0.5em' }}>
                    <Grid.Column width= '10' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        {
                            isFrom?(<Header as='h6' color= 'grey'  textAlign='left'>Balance:2.52713</Header>):null
                        }
                    </Grid.Column>
                    <Grid.Column width= '6' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Header as='h6' color= 'grey' textAlign='right'>Token</Header>
                    </Grid.Column>
                    
                </Grid.Row>
            </Grid>

            <Spacer size='sm'/>
            <Grid stackable columns={2} verticalAlign='middle'>
                <Grid.Row  verticalAlign='middle' style={{ paddingTop: '0.5em' }}>
                    <Grid.Column width= '6' textAlign= 'left' style={{ padding: '0px' }}>
                        {
                            isFrom?(
                                <Input   inverted size='massive' placeholder='0'  style={{maxWidth:'180px'}} input={{fontSize: '30px',fontWeight:500}} />
                            ):(
                                <Header as='h2' style={{ paddingLeft: '1em' }}>
                                    2
                                </Header>
                            )
                        }
                        
                    </Grid.Column>
                    <Grid.Column textAlign= 'right'  width= '10' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                    {
                        isFrom?(
                            <div>
                            <Button color='violet' size= 'mini' style={{marginRight:'1em',marginLeft:'1em'}}>Max</Button>
                            <Dropdown
                                inline
                                options={tokenOptions}
                                defaultValue={tokenOptions[0].value}
                            />
                            </div>
                        ):(
                            <Header as='h4'>
                                <Image src= {snplogo} size= 'tiny'/>SNP
                            </Header>
                        )
                    }
                    
                    </Grid.Column>
                    
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

const SeelePan: React.FC<PanProps> = ({isFrom = false}) => {
    return (
        <Segment>
            <Header as='h4'>Network:Seele</Header>
            <Divider/>
            <Grid stackable columns={2} verticalAlign='middle'>
                <Grid.Row textAlign='left' verticalAlign='middle' style={{ paddingTop: '0.5em' }}>
                    <Grid.Column width= '10' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                    {
                            isFrom?(<Header as='h6' color= 'grey'  textAlign='left'>Balance:2.52713</Header>):null
                    }
                    </Grid.Column>
                    <Grid.Column width= '6' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Header as='h6' color= 'grey' textAlign='right'>Token</Header>
                    </Grid.Column>
                    
                </Grid.Row>
            </Grid>

            <Spacer size='sm'/>
            <Grid stackable columns={2} verticalAlign='middle'>
                <Grid.Row  verticalAlign='middle' style={{ paddingTop: '0.5em' }}>
                    <Grid.Column width= '6' textAlign= 'left' style={{ padding: '0px' }}>
                    {
                            isFrom?(
                                <Input   inverted size='massive' placeholder='0'  style={{maxWidth:'180px'}} input={{fontSize: '30px',fontWeight:500}} />
                            ):(
                                <Header as='h2' style={{ paddingLeft: '1em' }}>
                                    2
                                </Header>
                            )
                        }
                    </Grid.Column>
                    <Grid.Column textAlign= 'right'  width= '10' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                    {
                        isFrom?(
                            <div>
                            <Button color='violet' size= 'mini' style={{marginRight:'1em',marginLeft:'1em'}}>Max</Button>
                            <Dropdown
                                inline
                                options={tokenOptions}
                                defaultValue={tokenOptions[0].value}
                            />
                            </div>
                        ):(
                            <Header as='h4'>
                                <Image src= {snplogo} size= 'tiny'/>SNP
                            </Header>
                        )
                    }
                    
                    </Grid.Column>
                    
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

const Bridge: React.FC = () => {
  const [isFromEth,setIsFromEth] = useState(true)
  return (
    <div>
        <StyledSegment raised >
            <Container textAlign= 'center' style={{ padding: '1em 1em',background: '#f2f7f5' }}>
                {
                    isFromEth?(
                        <div>
                            <EthPan isFrom/>
                            <Button circular color='facebook' icon={{name: 'exchange',rotated: 'clockwise'}} 
                            onClick= {()=>setIsFromEth(false)}
                            />
                            <SeelePan/>
                        </div>
                    ):(
                        <div>
                            <SeelePan isFrom/>
                            <Button circular color='facebook' icon={{name: 'exchange',rotated: 'clockwise'}} 
                            onClick= {()=>setIsFromEth(true)}
                            />
                            <EthPan/>
                        </div>
                    )
                }

                <Spacer size='sm'/>
                <Grid stackable columns={2} verticalAlign='middle'>
                    <Grid.Row textAlign='left' verticalAlign='middle' style={{ paddingTop: '1em' }}>
                        <Grid.Column width= '7' style={{  paddingTop: '0.5em' }}>
                            <Header as='h4' color= 'grey'>Slippage Tolerance</Header>
                        </Grid.Column>
                        <Grid.Column width= '9' style={{  paddingTop: '0.5em' }}>
                            <Header as='h4' color= 'teal'  textAlign='right'>3.00%</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row textAlign='left' verticalAlign='middle' style={{ paddingBottom: '0.5em',paddingTop: '0em' }}>
                        <Grid.Column width= '7' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                            <Header as='h4' color= 'grey'>Minimum Received</Header>
                        </Grid.Column>
                        <Grid.Column width= '9' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                            <Header as='h4' color= 'teal' textAlign='right'>1.94</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Divider/>
                <Button color='twitter' size= 'large' style={{ width: '100%' }}>Transfer</Button>
            </Container>
        </StyledSegment>
    </div>
  )
}

export default Bridge
import React from 'react'
import {
    Container,
    Segment,
    Grid,
    Header,
    Image,
    Table,
    Icon,
    Divider,
    Tab,
    Menu,
    Label,
    Button,
    Input,
  } from 'semantic-ui-react'
  import {Link} from 'react-router-dom'
  import styled from 'styled-components'

  import seelelogo from '../../assets/images/seelen.png'
  import snplogo from '../../assets/images/snp.png'
  import Spacer from '../../components/Spacer'
  import i18n from '../../utils/i18n'

  const panes = [
    {
      menuItem: { key: 'config', icon: 'configure', content: 'Config' },
      pane: (
        <Tab.Pane key='config'>
            <Header color= 'black' as= 'h5'>Node URL</Header>
            <Input size='large'  placeholder='Search...' style={{width:'100%'}}/>
            <Header color= 'black' as= 'h5'>Chain Explorer URL</Header>
            <Input size='large'  placeholder='Search...' style={{width:'100%'}}/>

            <Spacer size='md'/>
            <Grid stackable columns={2} verticalAlign='middle'>
                <Grid.Row textAlign='left' verticalAlign='middle' style={{ paddingTop: '1em' }}>
                    <Grid.Column width= '8' style={{  paddingTop: '0.5em' }}>
                        <Header color= 'black' as= 'h5'>Network Fee</Header>
                    </Grid.Column>
                    <Grid.Column width= '8' style={{  paddingTop: '0.5em' }}>
                        <Header color= 'black' as= 'h5'>Gas Limit</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row textAlign='left' verticalAlign='middle' style={{ paddingBottom: '0.5em',paddingTop: '0em' }}>
                    <Grid.Column width= '8' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Input size='large'  placeholder='10000' style={{width:'100%'}}/>
                    </Grid.Column>
                    <Grid.Column width= '8' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                    <Input size='large'  placeholder='300000' style={{width:'100%'}}/>
                    </Grid.Column>
                </Grid.Row>
                <Spacer size='md'/>
                <Grid.Row textAlign='center' verticalAlign='middle' style={{ paddingBottom: '0.5em',paddingTop: '0em' }}>
                    <Grid.Column width= '8' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Button size='large' color='twitter' style={{ width: '70%' }}>Save</Button>
                    </Grid.Column>
                    <Grid.Column width= '8' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Button size='large' style={{ width: '70%' }}>Discard Changes</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Tab.Pane>
      ),
    },
    {
        menuItem: { key: 'clear', icon: 'redo', content: 'Clear Storage' },
        pane: (
          <Tab.Pane key='clear'>
              <Header color= 'grey' as= 'h5'>Once you clear the storge,you will lose access to all your wallets.
                The only way to regain wallet access is by restoring wallet mnemonic phrase.
              </Header>
              <Spacer size='md'/>
              <Button size='big' color= 'red'>Clear Storage</Button>
          </Tab.Pane>
        ),
    },
  ]
  

const StyledSegment = styled(Segment)`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 1432px) {
    max-width: 768px;
  };
  @media (max-width: 1050px) {
    max-width: 485px;
  }
`;

const Setting: React.FC = () => {
    
  return (
    <div>
        <Spacer/>
        <StyledSegment raised>
            <Container style={{ padding: '1em 1em',background: '#f2f7f5' }}>
            <Header as='h3' >Setting</Header>
            <Divider/>
            <Tab panes={panes} renderActiveOnly={false}/>
            </Container>
        </StyledSegment>
    </div>
  )
}

export default Setting
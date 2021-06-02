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
    Statistic,
  } from 'semantic-ui-react'
  import {Link} from 'react-router-dom'
  import styled from 'styled-components'

  import seelelogo from '../../assets/images/seelen.png'
  import snplogo from '../../assets/images/snp.png'
  import Spacer from '../../components/Spacer'
  import i18n from '../../utils/i18n'


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

const Home: React.FC = () => {
    
  return (
    <div>
        <Spacer/>
        <StyledSegment raised>
            <Container style={{ padding: '1em 1em',background: '#f2f7f5' }}>
            <Header as='h3' >Account Details</Header>
            <Divider/>
            <Grid stackable columns={2} verticalAlign='middle'>
                <Grid.Row textAlign='left' verticalAlign='middle'>
                    <Grid.Column width= '6' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Header as='h4' color= 'grey'>Seele Chain</Header>
                    </Grid.Column>
                    <Grid.Column width= '10' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Header as={Link} color= 'teal'  style={{ fontSize: '16px',borderBottom: '1px dotted #000',display: 'inline-block'}}>seele1ca6t02quxh9wcdc6vnaatwr8f8s5cxdsqk44wx<Icon name= 'copy outline'/></Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row textAlign='left' verticalAlign='middle'>
                    <Grid.Column width= '6' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Header as='h4' color= 'grey'>Evm Address</Header>
                    </Grid.Column>
                    <Grid.Column width= '10' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Header as={Link} color= 'teal' style={{ fontSize: '16px',borderBottom: '1px dotted #000',display: 'inline-block'}}>0x264567b2f06D419093313ae8539fb40167Ba349C<Icon name= 'copy outline'/></Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
        </StyledSegment>
        <StyledSegment raised>
            <Container style={{ padding: '1em 1em',background: '#f2f7f5' }}>
            <Header as='h3' >My Balances</Header>
                <Table striped  unstackable>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell  ><Header color= 'grey' as= 'h5'>Token</Header></Table.HeaderCell>
                    <Table.HeaderCell  ><Header color= 'grey' as= 'h5'>Ethereum Mainnet</Header></Table.HeaderCell>
                    <Table.HeaderCell  ><Header color= 'grey' as= 'h5'>Seele Chain</Header></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell >
                            <Header as='h4'>
                                <Image src= {snplogo} size= 'tiny'/>
                                SNP
                            </Header>
                        </Table.Cell>
                        <Table.Cell ><Statistic color='teal' size= 'mini'><Statistic.Value>1,088.1800</Statistic.Value></Statistic></Table.Cell>

                        <Table.Cell><Statistic color='teal' size= 'mini'><Statistic.Value>682.28</Statistic.Value></Statistic></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell >
                            <Header as='h4'>
                                <Image src= {seelelogo} size= 'tiny'/>
                                SEELE
                            </Header>
                        </Table.Cell>

                        <Table.Cell ><Statistic color='teal' size= 'mini'><Statistic.Value>1,036,598.2300</Statistic.Value></Statistic></Table.Cell>
                        
                        <Table.Cell><Statistic color='teal' size= 'mini'><Statistic.Value>36,598.2300</Statistic.Value></Statistic></Table.Cell>
                    </Table.Row>
                </Table.Body>
                </Table>
            </Container>
        </StyledSegment>
    </div>
  )
}

export default Home
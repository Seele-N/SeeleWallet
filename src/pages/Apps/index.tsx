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
  } from 'semantic-ui-react'
  import {Link} from 'react-router-dom'
  import styled from 'styled-components'

  import seelelogo from '../../assets/images/seelen.png'
  import snplogo from '../../assets/images/snp.png'
  import Spacer from '../../components/Spacer'
  import i18n from '../../utils/i18n'



const Apps: React.FC = () => {
    
  return (
    <div>
        <Spacer/>
        <Segment raised>
            <Container style={{ padding: '1em 1em',background: '#f2f7f5' }}>
            <Header as='h3' >Account Details</Header>
            <Divider/>
            <Grid stackable columns={2} verticalAlign='middle'>
                <Grid.Row textAlign='left' verticalAlign='middle'>
                    <Grid.Column width= '6' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Header as='h4'>Seele Chain</Header>
                    </Grid.Column>
                    <Grid.Column width= '10' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Header as='h4' style={{ borderBottom: '1px dotted #000',display: 'inline-block'}}>seele1ca6t02quxh9wcdc6vnaatwr8f8s5cxdsqk44wx<Icon name= 'copy outline'/></Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row textAlign='left' verticalAlign='middle'>
                    <Grid.Column width= '6' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Header as='h4'>Ethereum Chain</Header>
                    </Grid.Column>
                    <Grid.Column width= '10' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Header as='h4' style={{ borderBottom: '1px dotted #000',display: 'inline-block'}}>0x264567b2f06D419093313ae8539fb40167Ba349C<Icon name= 'copy outline'/></Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
        </Segment>
        <Segment raised>
            <Container style={{ padding: '1em 1em',background: '#f2f7f5' }}>
            <Header as='h3' >Apps</Header>
                <Table striped  unstackable>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell style={{ fontSize: '1.12em' }}>Token</Table.HeaderCell>
                    <Table.HeaderCell style={{ fontSize: '1.12em' }}>Ethereum Mainnet</Table.HeaderCell>
                    <Table.HeaderCell style={{ fontSize: '1.12em' }}>Seele Chain</Table.HeaderCell>
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
                        <Table.Cell ><p style={{fontSize: '16px', fontWeight: 700, color: 'teal'}}>1,088.1800</p></Table.Cell>

                        <Table.Cell><p style={{fontSize: '16px', fontWeight: 700,color: 'teal'}}>682.28</p></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell >
                            <Header as='h4'>
                                <Image src= {seelelogo} size= 'tiny'/>
                                SEELE
                            </Header>
                        </Table.Cell>

                        <Table.Cell ><p style={{fontSize: '16px', fontWeight: 700,color: 'teal'}}>1,036,598.2300</p></Table.Cell>
                        
                        <Table.Cell><p style={{fontSize: '16px', fontWeight: 700,color: 'teal'}}>36,598.2300</p></Table.Cell>
                    </Table.Row>
                </Table.Body>
                </Table>
            </Container>
        </Segment>
    </div>
  )
}

export default Apps
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
  } from 'semantic-ui-react'
  import {Link} from 'react-router-dom'
  import styled from 'styled-components'

  import seelelogo from '../../assets/images/seelen.png'
  import snplogo from '../../assets/images/snp.png'
  import Spacer from '../../components/Spacer'
  import i18n from '../../utils/i18n'


  const panes = [
    {
      menuItem: { key: 'all', content: 'All' },
      pane: (
        <Tab.Pane key='all'>
            <Table striped  unstackable>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell  ><Header color= 'grey' as= 'h5'>Title</Header></Table.HeaderCell>
                    <Table.HeaderCell  ><Header color= 'grey' as= 'h5'>Time</Header></Table.HeaderCell>
                    <Table.HeaderCell  ><Header color= 'grey' as= 'h5'>Status</Header></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3' textAlign='center'>
                            <Header color= 'grey' as= 'h5' icon>
                                <Icon name='folder open outline' size = 'large'/>
                                No Data
                            </Header>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </Tab.Pane>
      ),
    },
    {
        menuItem: { key: 'Deposit',  content: 'Deposit' },
        pane: (
          <Tab.Pane key='Deposit'>
              Tab 2 Content
          </Tab.Pane>
        ),
    },
    {
        menuItem: { key: 'Voting',  content: 'Voting' },
        pane: (
          <Tab.Pane key='Voting'>
              Tab 2 Content
          </Tab.Pane>
        ),
    },
    {
        menuItem: { key: 'Passed',  content: 'Passed' },
        pane: (
          <Tab.Pane key='Passed'>
              Tab 2 Content
          </Tab.Pane>
        ),
    },
    {
        menuItem: { key: 'Rejected',  content: 'Rejected' },
        pane: (
          <Tab.Pane key='Rejected'>
              Tab 2 Content
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

const Governance: React.FC = () => {
    
  return (
    <StyledSegment raised>
        <Container style={{ padding: '1em 1em',background: '#f2f7f5' }}>
        <Header as='h3' >Governance</Header>
        <Divider/>
        <Header color= 'grey' as= 'h5'>You may see all proposals and cast your votes here.</Header>
        <Tab panes={panes} renderActiveOnly={false}/>
        </Container>
    </StyledSegment>
  )
}

export default Governance
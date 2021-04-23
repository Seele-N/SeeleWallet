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
  } from 'semantic-ui-react'
  import {Link} from 'react-router-dom'
  import styled from 'styled-components'

  import seelelogo from '../../assets/images/seelen.png'
  import snplogo from '../../assets/images/snp.png'
  import Spacer from '../../components/Spacer'
  import i18n from '../../utils/i18n'

  const panes = [
    {
      menuItem: { key: 'rewards', icon: 'gem outline', content: 'Stake Rewards' },
      pane: (
        <Tab.Pane key='rewards'>
            <Header color= 'grey' as= 'h5'>Widthdraw rewards from delegated funds</Header>
            <Table striped  unstackable>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell  ><Header color= 'grey' as= 'h5'>Validator Address</Header></Table.HeaderCell>
                    <Table.HeaderCell  ><Header color= 'grey' as= 'h5'>Reward  Amount</Header></Table.HeaderCell>
                    <Table.HeaderCell  ><Header color= 'grey' as= 'h5'>Action</Header></Table.HeaderCell>
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
        menuItem: { key: 'delegate', icon: 'bookmark outline', content: 'Delegate Funds' },
        pane: (
          <Tab.Pane key='delegate'>
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

const Stake: React.FC = () => {
    
  return (
    <div>
        <StyledSegment raised>
            <Container style={{ padding: '1em 1em',background: '#f2f7f5' }}>
            <Header as='h3' >Stake</Header>
            <Divider/>
            <Tab panes={panes} renderActiveOnly={false}/>
            </Container>
        </StyledSegment>
    </div>
  )
}

export default Stake
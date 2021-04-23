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
  Pagination,
  PaginationProps,
  Statistic,
  Divider,
  Label,
  Progress,
} from 'semantic-ui-react'
import { useParams,Link } from "react-router-dom";
import styled from 'styled-components'
import {useFetch, useTimer} from "../../hooks";
import constants from "../../constants";
import ValidatorTableRow from "../../components/ValidatorTableRow";
import {_,empty} from "../../lib/scripts";
import { useTranslation } from 'react-i18next'
import i18n from '../../utils/i18n'
import Spacer from '../../components/Spacer'


const PAGE_SIZE:number = 10;
var   blockbefore = 0

const StyledSegment = styled(Segment)`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 768px;
  @media (max-width: 1432px) {
    max-width: 768px;
  };
  @media (max-width: 1050px) {
    max-width: 485px;
  }
`;

interface RouteParams {
    id: string;
  }

const Proposal: React.FC = () => {

    const params = useParams<RouteParams>();
    const [data, requestFetch] = useFetch(`${constants.API_BASE}${constants.API.PROPOSAL}/${params.id}`, "get");

    React.useEffect(() => {
		requestFetch();
	}, [requestFetch]);

  return (
    <StyledSegment raised>
      <Container style={{ padding: '1em 1em',background: '#f2f7f5' }}>
      <Header as={Link} color='blue' to='/governance'><Icon name='arrow left'></Icon>Back to Proposal List</Header>
      <Divider/>
      <Grid stackable columns={2} verticalAlign='top'>
            <Grid.Row textAlign='left' verticalAlign='top' style={{ paddingTop: '0.5em' }}>
                <Grid.Column width= '10' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                    <Header as='h2'>Enable IBC on Seele Chain Mainnet #ID-1</Header>
                    <Label color='teal'>Voting PERIOD</Label>
                    <Header as='h4' style={{ paddingBottom: '0em', paddingTop: '0em',marginTop:'1em',marginBottom:'0px'}}>Start:17/04/2021,1:09PM</Header>
                    <Header as='h4' style={{ paddingBottom: '0em', paddingTop: '0em',marginTop:'0.5em',marginBottom:'1em' }}>End:01/05/2021,1:09PM</Header>
                    <Container  textAlign='left'> 
                        <p style={{fontSize: '16px', color: '#5f6061'}}>SeeleWallet is a free,
                        client-side interface helping you interact with SeeleChain. 
                        Our easy-to-use, open-source platform allows you to generate wallets, 
                        interact with smart contracts, and so much more.
                        SeeleWallet is a free,
                        client-side interface helping you interact with SeeleChain. 
                        Our easy-to-use, open-source platform allows you to generate wallets, 
                        interact with smart contracts, and so much more.
                        SeeleWallet is a free,
                        client-side interface helping you interact with SeeleChain. 
                        Our easy-to-use, open-source platform allows you to generate wallets, 
                        interact with smart contracts, and so much more.
                        SeeleWallet is a free,
                        client-side interface helping you interact with SeeleChain. 
                        Our easy-to-use, open-source platform allows you to generate wallets, 
                        interact with smart contracts, and so much more.
                        SeeleWallet is a free,
                        client-side interface helping you interact with SeeleChain. 
                        Our easy-to-use, open-source platform allows you to generate wallets, 
                        interact with smart contracts, and so much more.</p>
                    </Container>
                    <Segment textAlign='center'>
                        <Header as='h4' color= 'teal'>Cast your vote</Header>
                        <Divider/>
                        <Button basic size='large' style={{ width: '50%'}}>Yes-Support</Button>
                        <Spacer/>
                        <Button basic size='large' style={{ width: '50%'}}>No-Not Support</Button>
                        <Spacer/>
                        <Button basic size='large' style={{ width: '50%'}}>No with Veto</Button>
                        <Spacer/>
                        <Button basic size='large' style={{ width: '50%'}}>Abstain</Button>
                    </Segment>
                </Grid.Column>
                <Grid.Column verticalAlign='top' width= '6' style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                    <Segment textAlign='left'>
                        <Header as='h4' color= 'teal'>Current results</Header>
                        <Divider/>
                        <Header as='h4'>Yes-Support</Header>
                        <Progress percent={32} color='green' size='tiny'/>
                        <Header as='h4'>No-Do not support</Header>
                        <Progress percent={50} color='green' size='tiny'/>
                        <Header as='h4'>No with Veto-Do not support</Header>
                        <Progress percent={3} color='green' size='tiny'/>
                        <Header as='h4'>Absyain-Undecided</Header>
                        <Progress percent={2} color='green' size='tiny'/>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
      </Container>
    </StyledSegment>
  )
}

export default Proposal
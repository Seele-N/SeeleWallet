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
} from 'semantic-ui-react'
import { useParams } from "react-router-dom";
import {useFetch, useTimer} from "../../hooks";
import constants from "../../constants";
import BlockTableRow from "../../components/BlockTableRow";
import {_,empty} from "../../lib/scripts";
import { useTranslation } from 'react-i18next'
import i18n from '../../utils/i18n'

const PAGE_SIZE:number = 20;
var   blockbefore = 0

interface RouteParams {
    address: string;
  }

const Validator: React.FC = () => {
    const [t] = useTranslation()
  const params = useParams<RouteParams>();
  const [data, requestFetch] = useFetch(`${constants.API_BASE}${constants.API.VALIDATOR}/${params.address}`, "get");
  const [dataBlock, requestFetchBlock,setUrl] = useFetch(``, "get");
	React.useEffect(() => {
		requestFetch();
	}, [requestFetch]);

    React.useEffect(() => {
		if (!_.isNil(data.data?.Data)){
            setUrl(`${constants.API_BASE}${constants.API.BLOCKLIST}/${data.data.Data.consensus_address}`);
        }
	}, [data]);

    const blockTableBodyRender = React.useMemo(
		() => (
			<>
				{_.map(empty(dataBlock?.data)?Array.from({length:PAGE_SIZE},(z,idx) => ({id:idx})):dataBlock?.data?.Data, (v:any, i:any) => (
					<BlockTableRow blockData={v} />
				))}
			</>
		),
		[dataBlock]
	);

  const ValidatorContentRender = React.useMemo(
		() => (
			<>
				<Segment.Group raised>
          <Segment>
              <Header as='h3' >{data.data?.Data?.moniker?data.data.Data.moniker:""}</Header>
              <Grid stackable columns={2} verticalAlign='top'>
                  <Grid.Row textAlign='left' verticalAlign='top'>
                      <Grid.Column width= '8' style={{ paddingTop: '0.2em' }}>
                          <Header as='h4'>{i18n.t('validator.operator_address')}</Header>
                      </Grid.Column>
                      <Grid.Column width= '8' style={{  paddingTop: '0.2em' }}>
                          <Header as='h4'>{i18n.t('validator.account_address')}</Header>
                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row textAlign='left' verticalAlign='top'>
                      <Grid.Column width= '8' >
                          <p>{data.data?.Data?.operator_address?data.data.Data.operator_address:""}</p>
                      </Grid.Column>
                      <Grid.Column width= '8' >
                          <p>{data.data?.Data?.account_address?data.data.Data.account_address:""}</p>
                      </Grid.Column>
                  </Grid.Row>
                </Grid>
          </Segment>

          <Segment>
              <Grid stackable columns={2} verticalAlign='middle'>
                  <Grid.Row textAlign='left' verticalAlign='middle'>
                      <Grid.Column width= '3' style={{ paddingTop: '0.2em' }}>
                          <Header as='h4'>{i18n.t('validator.website')}</Header>
                      </Grid.Column>
                      <Grid.Column width= '13' style={{  paddingTop: '0.2em' }}>
                          <Header as='h5'>seele-n.pro</Header>
                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row textAlign='left' verticalAlign='middle'>
                      <Grid.Column width= '3' >
                          <Header as='h4'>{i18n.t('validator.fee')}</Header>
                      </Grid.Column>
                      <Grid.Column width= '13' >
                          <Header as='h5'>{data.data?.Data?.commission_rate?Number(data.data.Data.commission_rate*100).toFixed(2)+'%':""}</Header>
                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row textAlign='left' verticalAlign='middle'>
                      <Grid.Column width= '3' >
                          <Header as='h4'>{i18n.t('validator.voting_power')}</Header>
                      </Grid.Column>
                      <Grid.Column width= '13' >
                          <Header as='h5'>{data.data?.Data?.voting_power?`${Number(data.data.Data.delegator_shares).toFixed(4)}(${(Number(data.data.Data.voting_power)/100).toFixed(2)+'%'})`:""}</Header>
                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row textAlign='left' verticalAlign='middle'>
                      <Grid.Column width= '3' >
                          <Header as='h4'>{i18n.t('validator.self_bonded')}</Header>
                      </Grid.Column>
                      <Grid.Column width= '13' >
                          <Header as='h5'>{data.data?.Data?.tokens?data.data.Data.tokens:""}SNP</Header>
                      </Grid.Column>
                  </Grid.Row>
              </Grid>
          </Segment>
          </Segment.Group>

          <Segment.Group raised>
              <Segment>
                  <Header as='h3' >{i18n.t('validator.proposed_blocks')}</Header>
              </Segment>

              <Segment>
                  <Table striped  unstackable>
                      <Table.Header>
                          <Table.Row>
                          <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.height')}</Table.HeaderCell>
                          <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.proposer')}</Table.HeaderCell>
                          <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.txs')}</Table.HeaderCell>
                          <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.time')}</Table.HeaderCell>
                          </Table.Row>
                      </Table.Header>
                      <Table.Body>{blockTableBodyRender}</Table.Body>
                  </Table>
              </Segment>
          </Segment.Group>
			</>
		),
		[data]
	);

  return (
    <Container style={{ padding: '1em 1em',background: '#f3f5f9' }}>
      <Header as='h2' >{i18n.t('validator.validator_details')}</Header>
        {ValidatorContentRender}
    </Container>
  )
}

export default Validator
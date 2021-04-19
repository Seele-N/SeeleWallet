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
import {useFetch} from "../../hooks";
import constants from "../../constants";
import ProposalTableRow from "../../components/ProposalTableRow";
import {_,empty} from "../../lib/scripts";
import { useTranslation } from 'react-i18next'
import i18n from '../../utils/i18n'

const PAGE_SIZE:number = 20;

const Proposals: React.FC = () => {
  
  const [t] = useTranslation()
  const [data, requestFetch,setUrl] = useFetch(`${constants.API_BASE}${constants.API.PROPOSALS}?limit=125`, "get");

	React.useEffect(() => {
		requestFetch();
	}, [requestFetch]);

  const tableBodyRender = React.useMemo(
		() => (
			<>
				{_.map(empty(data?.data)?Array.from({length:PAGE_SIZE},(z,idx) => ({id:idx})):data?.data?.Data?.Proposals, (v:any, i:any) => (
          <ProposalTableRow data={v}/>
				))}
			</>
		),
		[data]
	);

  return (
    <Container style={{ padding: '1em 1em',background: '#f3f5f9' }}>
      <Header as='h3' >{i18n.t('common.proposals_up')}</Header>
      <Segment raised>
        <Table striped  unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.id')}</Table.HeaderCell>
              <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.title')}</Table.HeaderCell>
              <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.status')}</Table.HeaderCell>
              <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.voting_start')}</Table.HeaderCell>
              <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.submit_time')}</Table.HeaderCell>
              <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.total_deposit')}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{tableBodyRender}</Table.Body>
        </Table>
      </Segment>
    </Container>
  )
}

export default Proposals
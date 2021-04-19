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
} from 'semantic-ui-react'
import {useFetch, useTimer} from "../../hooks";
import constants from "../../constants";
import ValidatorTableRow from "../../components/ValidatorTableRow";
import {_,empty} from "../../lib/scripts";
import { useTranslation } from 'react-i18next'
import i18n from '../../utils/i18n'

const PAGE_SIZE:number = 20;
var   blockbefore = 0

const Validators: React.FC = () => {
  
  const [data, requestFetch,setUrl] = useFetch(`${constants.API_BASE}${constants.API.VALIDATORS}?limit=125`, "get");

	React.useEffect(() => {
		requestFetch();
	}, [requestFetch]);

  const tableBodyRender = React.useMemo(
		() => (
			<>
				{_.map(empty(data?.data)?Array.from({length:PAGE_SIZE},(z,idx) => ({id:idx})):data?.data?.Data?.Validators, (v:any, i:any) => (
          <ValidatorTableRow index={i+1} data={v}/>
				))}
			</>
		),
		[data]
	);

  return (
    <Container style={{ padding: '1em 1em',background: '#f3f5f9' }}>
      <Header as='h3' >{i18n.t('common.validators_up')}</Header>
      <Segment raised>
        <Table striped  unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.rank')}</Table.HeaderCell>
              <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.validator')}</Table.HeaderCell>
              <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.voting_power')}</Table.HeaderCell>
              <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.fee')}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{tableBodyRender}</Table.Body>
        </Table>
      </Segment>
    </Container>
  )
}

export default Validators
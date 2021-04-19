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
import TransactionTableRow from "../../components/TransactionTableRow";
import {_,empty} from "../../lib/scripts";
import { useTranslation } from 'react-i18next'
import i18n from '../../utils/i18n'

const PAGE_SIZE:number = 20;
var   txbefore = 0

const Transactions: React.FC = () => {
  const [t] = useTranslation()
  const [data, requestFetch,setUrl] = useFetch(`${constants.API_BASE}${constants.API.TRANSACTIONS}?limit=${PAGE_SIZE}&before=${txbefore}`, "get");

	React.useEffect(() => {
		requestFetch();
	}, [requestFetch]);

  const tableBodyRender = React.useMemo(
		() => (
			<>
				{_.map(empty(data?.data)?Array.from({length:PAGE_SIZE},(z,idx) => ({id:idx})):data?.data?.Data?.Txs, (v:any, i:any) => (
					<TransactionTableRow txData={v} />
				))}
			</>
		),
		[data]
	);

  const paginationRender = React.useMemo(
		() => (
			<Pagination
            defaultActivePage={1}
            ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
            firstItem={{ content: <Icon name='angle double left' />, icon: true }}
            lastItem={{ content: <Icon name='angle double right' />, icon: true }}
            prevItem={{ content: <Icon name='angle left' />, icon: true }}
            nextItem={{ content: <Icon name='angle right' />, icon: true }}
            totalPages={Math.ceil(data?.data?.Data?.Total/PAGE_SIZE)}
            onPageChange={(e:any, {activePage}:PaginationProps) =>{
              txbefore = data?.data?.Data?.Total-(Number(activePage)-1)*PAGE_SIZE + 1
              setUrl(`${constants.API_BASE}${constants.API.TRANSACTIONS}?limit=${PAGE_SIZE}&before=${txbefore}`);
            }}
            />
		),
		[data]
	);

  return (
    <Container style={{ padding: '1em 1em',background: '#f3f5f9' }}>
      <Header as='h3' >{i18n.t('common.transactions_up')}</Header>
      <Segment raised>
      <Table striped  unstackable>
        <Table.Header>
            <Table.Row>
              <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.tx_hash')}</Table.HeaderCell>
              <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.type')}</Table.HeaderCell>
              <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.height')}</Table.HeaderCell>
              <Table.HeaderCell style={{ fontSize: '1.12em' }}>{i18n.t('common.time')}</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>{tableBodyRender}</Table.Body>
        </Table>
      </Segment>
      <Segment vertical textAlign='right'>
        <>
          {paginationRender}
        </>
        </Segment>
    </Container>
  )
}

export default Transactions
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
    <Segment raised>
      <Container style={{ padding: '1em 1em',background: '#f3f5f9' }}>
        <Header as='h3' >Validators</Header>
        <Divider/>
        <Statistic.Group widths='four'>
          <Statistic>
            <Statistic.Value>2</Statistic.Value>
            <Statistic.Label>Total Validators</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>2</Statistic.Value>
            <Statistic.Label>Bonded Validators</Statistic.Label>
          </Statistic>

          <Statistic>
          <Statistic.Value>0</Statistic.Value>
            <Statistic.Label>Unbonding Validators</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>0</Statistic.Value>
            <Statistic.Label>Unbonded Validators</Statistic.Label>
          </Statistic>
        </Statistic.Group>
        
          <Table striped  unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell ><Header color= 'grey' as= 'h5'>Validator</Header></Table.HeaderCell>
                <Table.HeaderCell ><Header color= 'grey' as= 'h5'>Staked Amount(SNP)</Header></Table.HeaderCell>
                <Table.HeaderCell ><Header color= 'grey' as= 'h5'>Fee</Header></Table.HeaderCell>
                <Table.HeaderCell ><Header color= 'grey' as= 'h5'>Status</Header></Table.HeaderCell>
                <Table.HeaderCell ><Header color= 'grey' as= 'h5'>Actions</Header></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{tableBodyRender}</Table.Body>
          </Table>
      </Container>
    </Segment>
  )
}

export default Validators
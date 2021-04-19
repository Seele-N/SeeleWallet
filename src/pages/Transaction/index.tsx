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
import {_,empty,setAgoTime,getTotalTime} from "../../lib/scripts";
import { useTranslation } from 'react-i18next'
import i18n from '../../utils/i18n'

const PAGE_SIZE:number = 20;
var   blockbefore = 0

interface RouteParams {
    address: string;
  }

const Transaction: React.FC = () => {
    const [t] = useTranslation()
  const params = useParams<RouteParams>();
  const [data, requestFetch] = useFetch(`${constants.API_BASE}${constants.API.TRANSACTION}/${params.address}`, "get");

	React.useEffect(() => {
		requestFetch();
	}, [requestFetch]);

  const ContentRender = React.useMemo(
		() => (
			<>
				<Segment.Group raised>
              <Segment>
                  <Header as='h3' >{i18n.t('transaction.infomation')}</Header>
              </Segment>

          <Segment>
              <Grid stackable columns={2} verticalAlign='middle'>
                  <Grid.Row textAlign='left' verticalAlign='middle'>
                      <Grid.Column width= '3' style={{ paddingTop: '0.2em' }}>
                          <Header as='h4'>{i18n.t('transaction.txhash')}</Header>
                      </Grid.Column>
                      <Grid.Column width= '13' style={{  paddingTop: '0.2em' }}>
                          <Header as='h5'>{data.data?.Data?.tx_hash?data.data.Data.tx_hash:""}</Header>
                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row textAlign='left' verticalAlign='middle'>
                      <Grid.Column width= '3' >
                          <Header as='h4'>{i18n.t('transaction.status')}</Header>
                      </Grid.Column>
                      <Grid.Column width= '13' >
                          <Header as='h5'>
                            
                              {data.data?.Data?data.data.Data.code===0?
                              (
                                <Header as='h4'>
                                    <Icon name='check' size='tiny' color='green'/> 
                                    {i18n.t('transaction.success')}
                                </Header>
                              )
                              :
                              (
                                <Header as='h4'>
                                    <Icon name='close' size='tiny' color='red'/> 
                                    {i18n.t('transaction.failure')}
                                </Header>
                              ):""
                              }
                          </Header>
                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row textAlign='left' verticalAlign='middle'>
                      <Grid.Column width= '3' >
                          <Header as='h4'>{i18n.t('transaction.height')}</Header>
                      </Grid.Column>
                      <Grid.Column width= '13' >
                          <Header as='h5'>{data.data?.Data?.height?data.data.Data.height:""}</Header>
                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row textAlign='left' verticalAlign='middle'>
                      <Grid.Column width= '3' >
                          <Header as='h4'>{i18n.t('transaction.time')}</Header>
                      </Grid.Column>
                      <Grid.Column width= '13' >
                          <Header as='h5'>{data.data?.Data?.timestamp?`${setAgoTime(data.data.Data.timestamp)}(${getTotalTime(data.data.Data.timestamp)})`:""}</Header>
                      </Grid.Column>
                  </Grid.Row>
                 
                  <Grid.Row textAlign='left' verticalAlign='middle'>
                      <Grid.Column width= '3' >
                          <Header as='h4'>{i18n.t('transaction.gas')}</Header>
                      </Grid.Column>
                      <Grid.Column width= '13' >
                          <Header as='h5'>{data.data?.Data?.gas_used?data.data.Data.gas_used:""}</Header>
                      </Grid.Column>
                  </Grid.Row>
                  
              </Grid>
          </Segment>
          </Segment.Group>

          <Segment.Group raised>
                <Segment>
                    <Header as='h3' >{i18n.t('transaction.message')}</Header>
                </Segment>

                <Segment>
                    <Container text>
                        <p>{data.data?.Data?.memo?data.data.Data.memo:""}</p>
                    </Container>
                </Segment>
            </Segment.Group>

			</>
		),
		[data]
	);

  return (
    <Container style={{ padding: '1em 1em',background: '#f3f5f9' }}>
      <Header as='h2' >{i18n.t('transaction.transaction_details')}</Header>
      {ContentRender}
    </Container>
  )
}

export default Transaction
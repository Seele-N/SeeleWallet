import React,{useState} from 'react'
import {
    Table,
    Button,
    Image,
    Header,
  } from 'semantic-ui-react'
  import Skeleton from "react-skeleton-loader";
  import {NavLink} from "react-router-dom";
  import styled from "styled-components";
  import snplogo from '../../assets/images/snp.png'
  
  interface  ValidatorTableRowProps{
    data:any;
    index?: any;
 }

 const StyledLink = styled(NavLink)`
 color: #4472de;
 font-size: 14px;
 text-decoration: none;
`;

const ValidatorTableRow: React.FC<ValidatorTableRowProps> = ({index,data}) => {
    return (
        <Table.Row>

            <Table.Cell >{data.moniker ? (
                  <Header as='h4'>
                    <Image src= {snplogo} size= 'tiny'/>
                      {data.moniker}
                  </Header>
                ) : (
                    <Skeleton width={"80px"}/>
                )}
            </Table.Cell>
            <Table.Cell>{data.delegator_shares ? `${Number(data.delegator_shares).toFixed(4)}(${(Number(data.voting_power)/100).toFixed(2)+'%'})` : <Skeleton width={"80px"}/>}</Table.Cell>
            <Table.Cell>{data.commission_rate ? <>{Number(data.commission_rate*100).toFixed(2)}%</> : <Skeleton width={"40px"}/>}</Table.Cell>
            <Table.Cell>{data.status ? <Header as='h4' color='blue'>Bonded</Header> : <Skeleton width={"40px"}/>}</Table.Cell>
            <Table.Cell>{data.moniker ? <Button color='twitter'>Delegate</Button> : <Skeleton width={"80px"}/>}</Table.Cell>
        </Table.Row>
    )
}

export default ValidatorTableRow
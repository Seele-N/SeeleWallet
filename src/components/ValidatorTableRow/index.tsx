import React,{useState} from 'react'
import {
    Table,
  } from 'semantic-ui-react'
  import Skeleton from "react-skeleton-loader";
  import {NavLink} from "react-router-dom";
  import styled from "styled-components";
  
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
            <Table.Cell >{data.account_address ? index: <Skeleton />}</Table.Cell>

            <Table.Cell >{data.moniker ? (
                  <StyledLink  to={`/validator/${data.account_address}`}>
                    {data.moniker}
                  </StyledLink>
                ) : (
                    <Skeleton />
                )}
            </Table.Cell>
            <Table.Cell>{data.delegator_shares ? `${Number(data.delegator_shares).toFixed(4)}(${(Number(data.voting_power)/100).toFixed(2)+'%'})` : <Skeleton />}</Table.Cell>
            <Table.Cell>{data.commission_rate ? <>{Number(data.commission_rate*100).toFixed(2)}%</> : <Skeleton />}</Table.Cell>
        </Table.Row>
    )
}

export default ValidatorTableRow
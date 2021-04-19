import React from 'react'
import {
    Table,
    Icon,
  } from 'semantic-ui-react'
  import Skeleton from "react-skeleton-loader";
  import {NavLink} from "react-router-dom";
  import styled from "styled-components";
  import {_} from "../../lib/scripts";

  interface  ProposalTableRowProps{
    data:any;
 }

 const StyledLink = styled(NavLink)`
 color: #4472de;
 font-size: 14px;
 text-decoration: none;
`;

const colors = ['#049ECD', '#f3fc76', '#76c0fc', '#00ff00', '#ff0000']

function sumTotalDeposit(arr:any){
    let sum:number = 0
    for(let j = 0,len=arr.length; j < len; j++) {
        sum += Number(arr[j].amount)
    }
    return sum
}

function getStatus(status:number){
    let ret:string = "Unknown"
    switch(status)
    {
        case 1:
            ret = "DepositPeriod"
            break;
        case 2:
            ret = "VotingPeriod"
            break;
        case 3:
            ret = "Passed"
            break;
        case 4:
            ret = "Rejected"
            break;
    }
    return (
        <>
        <Icon name='circle'  size='tiny' style={{ color: colors[status]}}/> {ret}
        </>
    )
}

const ProposalTableRow: React.FC<ProposalTableRowProps> = ({data}) => {
    return (
        <Table.Row>
            <Table.Cell >{data.id ? data.id: <Skeleton />}</Table.Cell>

            <Table.Cell >{data.title ? (
                  <StyledLink  to={`/proposal/${data.id}`}>
                    {data.title}
                  </StyledLink>
                ) : (
                    <Skeleton />
                )}
            </Table.Cell>
            <Table.Cell>{data.status ? getStatus(data.status) : <Skeleton />}</Table.Cell>
            <Table.Cell>{data.voting_start_time ? <>{data.voting_start_time}</> : <Skeleton />}</Table.Cell>
            <Table.Cell>{data.submit_time ? <>{data.submit_time}</> : <Skeleton />}</Table.Cell>
            <Table.Cell>{data.total_deposit? <>{data.total_deposit}</> : <Skeleton />}</Table.Cell>
        </Table.Row>
    )
}

export default ProposalTableRow
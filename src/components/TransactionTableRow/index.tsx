import React,{useState} from 'react'
import {
    Table,
  } from 'semantic-ui-react'
  import Skeleton from "react-skeleton-loader";
  import {NavLink} from "react-router-dom";
  import styled from "styled-components";
  import {setAgoTime,reduceString} from "../../lib/scripts";
 interface  TxTableRowProps{
    txData:any;
 }

 const StyledLink = styled(NavLink)`
 color: #4472de;
 font-size: 14px;
 text-decoration: none;
`;

const TransactionTableRow: React.FC<TxTableRowProps> = ({txData}) => {
    return (
        <Table.Row>
            <Table.Cell >{txData.tx_hash ? (
                <StyledLink  to={`/transaction/${txData.tx_hash}`}>
                    {reduceString(txData.tx_hash,6,6)}
                </StyledLink>
                ) : (
                    <Skeleton width={"40px"}/>
                )}
            </Table.Cell>
            <Table.Cell>{txData.messages ? "transfer"  : <Skeleton width={"40px"}/>}</Table.Cell>
            <Table.Cell >{txData.height ? (
                <StyledLink  to={`/block/${txData.height}`}>
                    {txData.height}
                </StyledLink>
                ) : (
                    <Skeleton width={"40px"}/>
                )}
            </Table.Cell>
            <Table.Cell>{txData.timestamp ? <>{setAgoTime(txData.timestamp)}</> : <Skeleton width={"80px"}/>}</Table.Cell>
          </Table.Row>
    )
}

export default TransactionTableRow
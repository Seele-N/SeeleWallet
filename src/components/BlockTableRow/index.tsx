import React,{useState} from 'react'
import {
    Table,
  } from 'semantic-ui-react'
  import Skeleton from "react-skeleton-loader";
  import {NavLink} from "react-router-dom";
  import styled from "styled-components";
  import {setAgoTime} from "../../lib/scripts";

 interface  BlockTableRowProps{
    blockData:any;
 }

 const StyledLink = styled(NavLink)`
 color: #4472de;
 font-size: 14px;
 text-decoration: none;
`;

const BlockTableRow: React.FC<BlockTableRowProps> = ({blockData}) => {
    return (
        <Table.Row>
            <Table.Cell >{blockData.height ? (
                <StyledLink  to={`/block/${blockData.height}`}>
                    {blockData.height}
                </StyledLink>
                ) : (
                    <Skeleton width={"40px"}/>
                )}
            </Table.Cell>
            <Table.Cell >{blockData.moniker ? (
                  <StyledLink  to={`/validator/${blockData.proposer}`}>
                    {blockData.moniker}
                  </StyledLink>
                ) : (
                    <Skeleton width={"80px"}/>
                )}
            </Table.Cell>
            <Table.Cell>{blockData.height ? blockData.num_txs ? blockData.num_txs : "0" : <Skeleton width={"40px"}/>}</Table.Cell>
            <Table.Cell>{blockData.timestamp ? <>{setAgoTime(blockData.timestamp)}</> : <Skeleton width={"80px"}/>}</Table.Cell>
          </Table.Row>
    )
}

export default BlockTableRow
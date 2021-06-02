import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Segment,Menu,Image,Icon, Container, Dropdown,MenuItemProps,Sidebar,SidebarProps} from 'semantic-ui-react'
import {Media} from '../../utils/media'
import logo from '../../assets/images/seelen.png'
import AppMenu from '../AppMenu'
import PageHeader from '../PageHeader'
import AppTopBar from '../AppTopBar'
import SideBar from '../SideBar'
import Footer from '../Footer'

export const PagePanel = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #f9f9f9;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
`

const StyledMain = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh);
  height: calc(100%);
  width: calc(100%);
  margin-left: 12px;
  margin-right: 12px;
`;

const StyledPage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: calc(100%);
  width: calc(100%);
  background: linear-gradient(75deg,#f1f8f2,75%, #e0f8e4)
`

const StyledChildren = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh-${(props) => props.theme.topBarSize+12}px);
  width: calc(100%);
  margin-top: ${(props) => props.theme.topBarSize+12}px;
`;

const PageApp: React.FC = ({ children }) => {
  return (
    <StyledPage>
        <SideBar/>
        <StyledMain>
            <AppTopBar/>
            <StyledChildren>
            {children}
            </StyledChildren>
        </StyledMain>
    </StyledPage>
  )
}


export default PageApp

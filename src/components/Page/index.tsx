import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Segment,Menu,Image,Icon, Container, Dropdown,MenuItemProps,Sidebar,SidebarProps} from 'semantic-ui-react'
import {Media} from '../../utils/media'
import logo from '../../assets/images/seelen.png'
import AppMenu from '../AppMenu'
import PageHeader from '../PageHeader'
import TopBar from '../TopBar'
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
  flex-direction: row;
  min-height: calc(100vh - ${props => props.theme.topBarSize*2}px);
`;

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${props => props.theme.topBarSize*2}px);
`;

const StyledPage = styled.div`
  background: linear-gradient(75deg,#f1f8f2,65%, #e0f8e4)
`

const Page: React.FC = ({ children }) => {
  return (
    <StyledPage>
      <TopBar/>
      <StyledMain>
        {children}
      </StyledMain>
      <Footer/>
    </StyledPage>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page

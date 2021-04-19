import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../../assets/images/seelen.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img
        src={logo}
        height="46"
        style={{
          marginTop: -4,
        }}
        alt="logo"
      />
      <StyledText>Seele Scan</StyledText>
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`

const StyledText = styled.span`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-left: 10px;

  @media (max-width: 400px) {
    display: none;
  }
`

export default Logo

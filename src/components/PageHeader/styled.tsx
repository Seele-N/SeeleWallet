import styled from 'styled-components'

export const HeaderPanel = styled.div`
  width: 100%;
  min-height: 64px;
  background-color: #040607;
  position: fixed;
  position: -webkit-fixed;
  overflow: visible;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 120px;

  @media (max-width: 1440px) {
    padding: 0 100px;
  }

  @media (max-width: 1200px) {
    padding: 0 45px;
  }

  @media (max-width: 750px) {
    padding: 0 18px;
  }
`

export const HeaderEmptyPanel = styled.div`
  flex: 1;
`

import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'
import { MediaContextProvider } from './utils/media'
import Routers from './routes'

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
`

const Providers: React.FC = ({ children }) => {
  return (
    <MediaContextProvider>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </MediaContextProvider>
  )
}

function App() {
  return (
    <Providers>
      <AppDiv>
        <Routers />
      </AppDiv>
    </Providers>
  )
}

export default App;

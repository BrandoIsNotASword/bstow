import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'

import { HomePage } from 'components'

import theme from './themes/default'
import logo from './logo.png'

injectGlobal`
  body,
  html,
  #app {
    margin: 0;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: Arial, sans-serif;
    font-size: 16px;
  }

  p {
    margin: 0;
  }
`

const Header = styled.header`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
`

const Logo = styled.img`
  height: auto;
  width: 80px;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header><Logo src={logo} alt="bstow" /></Header>
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </div>
    </ThemeProvider>
  )
}

export default App

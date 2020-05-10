import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import tw from 'twin.macro'

import 'tailwindcss/dist/base.css'

import IndexPage from './containers/IndexPage'
import Header from "./components/Header";

const Container = tw.main``

const App: React.FC = () => (
  <Container role="main">
    <Header authorized={ false } />
    <Router>
      <Switch>
        <Route exact path="/" component={ IndexPage } />
      </Switch>
    </Router>
  </Container>
)

export default App

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import tw from 'twin.macro'
import { Global, css } from '@emotion/core'
import reset from 'emotion-reset'
import 'tailwindcss/dist/base.css'

import { IndexPage, EventOrganizePage, EventViewPage, LoginPage } from './containers'
import { Theme, Header, Footer} from "./components";

const Container = tw.main``

const App: React.FC = () => {
  return (
    <Theme>
      <Global styles={ css`
        ${ reset };
      ` } />
        <Container role="main">
          <Router>
            <Switch>
              <Route exact path="/" component={ IndexPage } />
              <Route exact path='/event' component={ EventOrganizePage } />
              <Route path='/event/:id' component={ EventViewPage } />
              <Route path='/login' component={ LoginPage } />
            </Switch>
          </Router>
        </Container>
    </Theme>
  )
}

export default App

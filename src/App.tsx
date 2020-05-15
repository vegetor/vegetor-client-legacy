import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import tw from 'twin.macro'
import { Global, css } from '@emotion/core'
import reset from 'emotion-reset'
import 'tailwindcss/dist/base.css'

import { IndexPage, EventOrganizePage, EventViewPage, LoginPage, PeopleListPage, PeopleViewPage, PlaceListPage, PlaceViewPage, AboutPage, HelpDeskPage } from './containers'
import { Theme } from "./components";

const Container = tw.main``

const App: React.FC = () => {
  return (
    <Theme>
      <Global styles={ css`
        ${ reset };
        font-family: "Spoqa Han Sans", sans-serif;
        body {
          &.dimmed {
            overflow: hidden;
          }
        }
      ` } />
        <Container role="main">
          <Router>
            <Switch>
              <Route exact path="/" component={ IndexPage } />

              <Route exact path='/event' component={ EventOrganizePage } />
              <Route path='/event/:id' component={ EventViewPage } />

              <Route exact path="/people" component={ PeopleListPage } />
              <Route path="/people/:id" component={ PeopleViewPage } />

              <Route exact path="/place" component={ PlaceListPage } />
              <Route path="/people/:id" component={ PlaceViewPage } />

              <Route path="/about" component={ AboutPage } />
              <Route path="/helpdesk" component={ HelpDeskPage } />

              <Route path='/login' component={ LoginPage } />
            </Switch>
          </Router>
        </Container>
    </Theme>
  )
}

export default App

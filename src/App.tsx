import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import tw from 'twin.macro'
import 'tailwindcss/dist/base.css'

import { IndexPage, EventOrganizePage, EventViewPage, LoginPage } from './containers'
import { Theme, Header, Footer} from "./components";

const Container = tw.main``

const App: React.FC = () => {
  return (
    <Theme>
      <Container role="main">
        <Header authorized={ false } />
        <Router>
          <Switch>
            <Route exact path="/" component={ IndexPage } />
            <Route exact path='/event' component={ EventOrganizePage } />
            <Route path='/event/:id' component={ EventViewPage } />
            <Route path='/login' component={ LoginPage } />
          </Switch>
        </Router>
        <Footer />
      </Container>
    </Theme>
  )
}

export default App

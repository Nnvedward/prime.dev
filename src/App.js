import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ArticlePage from './pages/ArticlePage'
import ContactPage from './pages/ContactPage'
import DashBoardPage from './pages/DashBoardPage'
import ErrorPage from './pages/ErrorPage'
import ProjectPage from './pages/ProjectPage'
import ResumePage from './pages/ResumePage'

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={DashBoardPage} exact={true} />
        <Route path="/article" component={ArticlePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/project" component={ProjectPage} />
        <Route path="/resume" component={ResumePage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;

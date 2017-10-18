import React from 'react';
import './App.css';
import Home from './HomePage.js';
import NotFound from './NotFound.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, withRouter, Switch } from 'react-router-dom';
import '../node_modules/grommet-css';




const App = ({ location }) => {
  
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 300, exit: 200 };
  return (

      <TransitionGroup component="main" className="page-main">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <Switch location={location}>
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    
  )
}

export default withRouter(App)
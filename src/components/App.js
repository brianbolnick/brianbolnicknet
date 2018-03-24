import React, { Component } from 'react';
import '../css/App.css';
import Home from './HomePage.js';
import NotFound from './NotFound.js';
import AuthError from './AuthError.js';
import Destinder from './Destinder.js';
import SellOut from './Sellout.js';
import Icpm from './Icpm.js';
import Gilagoat from './Gilagoat.js';
import About from './About.js';
import Spin from './SpinDemo.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, withRouter, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    const currentKey = this.props.location.pathname.split('/')[1] || '/';
    const timeout = { enter: 300, exit: 200 };
    return (

      <TransitionGroup component="main" className="page-main" style={{ height: '100%' }}>
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <Switch location={this.props.location}>
            <Route path="/" exact component={Home} />
            <Route path="/destinder" exact component={Destinder} />
            <Route path="/sellout" exact component={SellOut} />
            <Route path="/icpm" exact component={Icpm} />
            <Route path="/gilagoat" exact component={Gilagoat} />
            <Route path="/about" exact component={About} />
            <Route path="/spin-demo" exact component={Spin} />
            <Route path="/auth_error" exact component={AuthError} />
            <Route component={NotFound} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default withRouter(App)
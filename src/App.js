import React, { Component } from 'react';
import './App.css';
import Home from './HomePage.js';
import ApiTool from './ApiTool.js';
import NotFound from './NotFound.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, withRouter, Switch } from 'react-router-dom';
import { getQueryParams } from './utils';
import '../node_modules/grommet-css';



class HomePage extends Component {
  
  constructor() {
    super();

    const params = getQueryParams();
    this.state = { token: params.token };
  }

  isLoggedIn() {
    return !!this.state.token;
  }
  render () {
    return (
      <Home token={this.state.token}
    />
    )
  }
}

class App extends Component {

  render () {
    const currentKey = this.props.location.pathname.split('/')[1] || '/';
    const timeout = { enter: 300, exit: 200 };
    return (

      // <div className='App'>
      //   {this.isLoggedIn()
      //     ? <Main token={this.state.token} />
      //     : <Login />
      //   }
      // </div>
      <TransitionGroup component="main" className="page-main">
      <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
        <Switch location={this.props.location}>
          <Route path="/" exact component={HomePage}/>
          <Route path="/api_tool" exact component={ApiTool}/>
          <Route component={NotFound} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
    )
  }
}


// const App = ({ location }) => {
  
//   const currentKey = location.pathname.split('/')[1] || '/';
//   const timeout = { enter: 300, exit: 200 };
//   return (

//       <TransitionGroup component="main" className="page-main">
//         <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
//           <Switch location={location}>
//             <Route path="/" exact component={Home} />
//             <Route component={NotFound} />
//           </Switch>
//         </CSSTransition>
//       </TransitionGroup>
    
//   )
// }

export default withRouter(App)
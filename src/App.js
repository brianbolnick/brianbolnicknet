import React, { Component } from 'react';
import './App.css';
import Home from './HomePage.js';
import NoteCards from './NoteCards.js';
import NotFound from './NotFound.js';
import AuthError from './AuthError.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, withRouter, Switch } from 'react-router-dom';
import { getQueryParams } from './utils';
import '../node_modules/grommet-css';
import  jwtDecode from 'jwt-decode';



class HomePage extends Component {
  
  constructor() {
    super();

    const params = getQueryParams();
    // console.log(params);
    if (params.token != null) {
      const jwt = jwtDecode(params.token);
      // console.log(jwt);

      this.state = { 
        token: params.token,
        login: jwt.login,
        avatar: jwt.avatar_url,
        name: jwt.name
      };
      
      // console.log(jwt);
      localStorage.setItem('auth_token', params.token);
      localStorage.setItem('jwt', JSON.stringify(jwt));
    } else {
      this.state = { 
        token: params.token
      };
    }
  }

  isLoggedIn() {
    return !!this.state.token;
  }
  render () {
    return (
      <Home token={this.state.token} />
    )
  }
}

class App extends Component {

  render () {
    const currentKey = this.props.location.pathname.split('/')[1] || '/';
    const timeout = { enter: 300, exit: 200 };
    return (

      <TransitionGroup component="main" className="page-main">
      <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
        <Switch location={this.props.location}>
          <Route path="/" exact component={HomePage}/>
          <Route path="/notecards" exact component={NoteCards}/>
          <Route path="/destiny" exact component={NoteCards}/>
          <Route path="/resume" exact component={NoteCards}/>
          <Route path="/professional" exact component={NoteCards}/>
          <Route path="/education" exact component={NoteCards}/>
          <Route path="/personal" exact component={NoteCards}/>
          <Route path="/auth_error" exact component={AuthError}/>
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
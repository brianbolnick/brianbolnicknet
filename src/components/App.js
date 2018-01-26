import React, { Component } from 'react';
import '../css/App.css';
import Home from './Home/HomePage.js';
import NoteCards from './Tools/NoteCards.js';
import NotFound from './NotFound.js';
import AuthError from './AuthError.js';
import Resume from './Bio/Resume.js';
import Grades from './Bio/Grades.js';
import Destinder from './Showcase/Destinder.js';
import SellOut from './Showcase/SellOut.js';
import Icpm from './Showcase/Icpm.js';
import About from './Home/About.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, withRouter, Switch } from 'react-router-dom';
import { getQueryParams } from '../utils';
import '../../node_modules/grommet-css';
import  jwtDecode from 'jwt-decode';

class App extends Component {
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
        name: jwt.name,
        display_name: jwt.display_name
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
    const currentKey = this.props.location.pathname.split('/')[1] || '/';
    const timeout = { enter: 300, exit: 200 };
    return (

      <TransitionGroup component="main" className="page-main" style={{ height: '100%' }}>
      <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
        <Switch location={this.props.location}>
          <Route path="/" exact component={Home} token={this.state.token} />
          <Route path="/notecards" exact component={NoteCards} token={this.state.token} />
          <Route path="/destinder" exact component={Destinder} />
          <Route path="/resume" exact component={Resume}  />
          <Route path="/sellout" exact component={SellOut} />
          <Route path="/icpm" exact component={Icpm} />
          <Route path="/about" exact component={About} />
          <Route path="/canvas_grades" exact component={Grades} />
          <Route path="/auth_error" exact component={AuthError}  />
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
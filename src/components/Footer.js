import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import Typed from 'typed.js';
import '../css/Home.css';

import '../css/Home.css';
class TypedHeader extends React.Component {
  componentDidMount() {
    const options = {
      strings: [
        "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind. - Dr. Seuss",
        "There isn't a way things should be. There's just what happens, and what we do. - Terry Pratchett",
        "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward. - Rocky Balboa",
        "You miss 100% of the shots you never take. - Wayne Gretzky",
        "Clear eyes, full hearts, can't lose. - Friday Night Lights",
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
        "Great moments are born from great opportunities. - Herb Brooks"  

      ],
      loop: true,
      startDelay: 500,
      backDelay: 2000,
      typeSpeed: 20,
      showCursor: true,
      cursorChar: "|",
      shuffle: true
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <span ref={(el) => { this.el = el; }} />
    );
  }
}

class FooterContent extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-left">
          <div className="typed-header">
            <TypedHeader />
          </div>
        </div>
        <div className="footer-right">
          <div className="copyright">
            Created by Brian Bolnick &copy; 2018
          </div>
          <div className="social">
            <a href="//linkedin.com/in/brianbolnick/">
              <Icon name='linkedin' size="large" style={{ color: "#414141" }} link />
            </a>
            <a href="//github.com/brianbolnick">
              <Icon name='github' size="large" style={{ color: "#414141" }} link />
            </a>
            <a href="//twitter.com/brianbolnick">
              <Icon name='twitter' size="large" style={{ color: "#414141" }} link />
            </a>
            <a href="//dribbble.com/brianbolnick">
              <Icon name='dribble' size="large" style={{ color: "#414141" }} link />
            </a>
          </div>
        </div>
      </div>
    )
  }
}



export default FooterContent


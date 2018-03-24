import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import Typed from 'typed.js';
import '../css/Home.css';

import '../css/Home.css';
class TypedHeader extends React.Component {
  componentDidMount() {
    const options = {
      strings: [
        '"But man is not made for defeat. A man can be destroyed but not defeated." - Ernest Hemingway',
        '"Learning never exhausts the mind." - Leonardo Da Vinci',
        '"Be yourself; everyone else is already taken." - Oscar Wilde'
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


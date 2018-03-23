import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import '../../css/Home.css';

class FooterContent extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-left">
          <div className="copyright">
            Created by Brian Bolnick &copy; 2018
            </div>
        </div>
        <div className="footer-right">
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


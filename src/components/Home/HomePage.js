import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import Photo from "../../img/me-clip.png";
import ICPM from "./ICPM";
import Destinder from "./Destinder";
import Canvas from "./Canvas";
import Layout from "../Layout";
import ReactDOM from "react-dom";
import Gilagoat from "./Gilagoat";
import Sellout from "./Sellout";
import Europe from "./Europe";
import HumanizeTime from "./HumanizeTime";
import DestinyPlayers from "./DestinyPlayers";

const TopContent = () => {
  return (
    <div className="home-top-container">
      <div className="top-content">
        <div className="top-title">Hello!</div>
        <div className="top-desc">
          I'm a Software Engineer focused on web development. I have a
          Bachelor's degree in Information Systems with a Minor in Computer
          Science from the University of Utah.
        </div>
        <div className="top-desc">
          Currently Senior Software Engineer at{" "}
          <a
            href="https://podium.com"
            className="inline-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Podium
          </a>
          . Previously at{" "}
          <a
            href="https://lds.org"
            className="inline-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Church of Jesus Christ of Latter-Day Saints
          </a>{" "}
          and
          <a
            href="https://instructure.com"
            className="inline-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Instructure.{" "}
          </a>
        </div>
      </div>
      <div className="top-image">
        <img src={Photo} alt="" className="self-image" />
      </div>
    </div>
  );
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.scrollToFirst = this.scrollToFirst.bind(this);
  }

  scrollToFirst(event) {
    const testNode = ReactDOM.findDOMNode(this.refs.first);
    window.scrollTo({ behavior: "smooth", top: testNode.offsetTop, left: "0" });
  }

  render() {
    return (
      <Layout>
        <TopContent />
        <div className="scroll-container">
          <Icon
            name="angle down"
            size="huge"
            id="scroll-icon"
            onClick={this.scrollToFirst}
          />
        </div>
        <div className="main-content" id="main-content" ref="first">
          <div className="main-page-title">PERSONAL PORTFOLIO</div>
          <DestinyPlayers />
          <HumanizeTime />
          <Europe />
          <ICPM />
          {/* <Destinder /> */}
          <Sellout />
          {/*          <Gilagoat /> */}
          {/*<Canvas /> */}
        </div>
        <div className="work-content">
          <div
            className="main-page-title"
            style={{ marginBottom: "5px", marginTop: "5%" }}
          >
            PROFESSIONAL EXPERIENCE
          </div>
          <div className="main-page-meta-data">
            As the majority of professional and enterprise code is protected or
            confidential, I've listed my work experience with minor details
            below.
          </div>
          <div className="experience">
            <div className="experience-body">
              <a
                className="exp-row"
                href="https://podium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="exp-title">
                  <div className="exp-position">Senior Software Engineer</div>
                  <div className="exp-place">Podium</div>
                </div>
                {/* <div className="exp-tech">
                                    React | Rails | Elixir
                                    </div> */}
                <div className="exp-date">10/2020 - CURRENT</div>
              </a>

              <a
                className="exp-row"
                href="https://podium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="exp-title">
                  <div className="exp-position">Software Engineer</div>
                  <div className="exp-place">Podium</div>
                </div>
                {/* <div className="exp-tech">
                                    React | Rails | Elixir
                                    </div> */}
                <div className="exp-date">9/2018 - 10/2020</div>
              </a>
              <a
                href="https://lds.org"
                className="exp-row"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="exp-title">
                  <div className="exp-position">Software Engineer</div>
                  <div className="exp-place">
                    The Church of Jesus Christ of Latter-Day Saints
                  </div>
                </div>
                {/* <div className="exp-tech">
                                    React | Java
                                    </div> */}
                <div className="exp-date">4/2018 - 9/2018</div>
              </a>
              <a
                href="https://instructure.com"
                className="exp-row"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="exp-title">
                  <div className="exp-position">
                    Principal Implementation Project Manager
                  </div>
                  <div className="exp-place">Instructure</div>
                </div>
                {/* <div className="exp-tech">
                                    React | Rails | Node.js
                                    </div> */}
                <div className="exp-date">12/2014 - 3/2018</div>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default HomePage;

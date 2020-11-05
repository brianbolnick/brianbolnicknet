import React from "react";
import Logo from "../../img/destiny-players.svg";
import ProjectContainer from "./Project/ProjectContainer";
import ProjectDetails from "./Project/ProjectDetails";

export default () => (
  <ProjectContainer>
    <a href="//destinyplayers.app" target="_blank" rel="noopener noreferrer">
      <div className="project-show">
        <div className="parent-container" id="destiny-players">
          <div
            className="child-container"
            style={{ width: "450px", marginLeft: "0px" }}
          >
            <img src={Logo} alt="" className="child-img" id="destiny-players" />
          </div>
        </div>
      </div>
    </a>
    <ProjectDetails
      title="DESTINY PLAYERS"
      description="Product suite of tools tailored for players of Destiny the Game who are looking to expand their player base. Users can search for other players who meet specific play styles and traits which are made presentable by a simple dashboard view. Features include in-app messaging, integrations with gaming console platforms, and more."
      dates="PERSONAL • 2020 - PRESENT"
    />
  </ProjectContainer>
);

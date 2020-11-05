import React from "react";
import Hippo from "../../img/hippo2.svg";
import ProjectContainer from "./Project/ProjectContainer";
import ProjectDetails from "./Project/ProjectDetails";

export default () => (
  <ProjectContainer>
    <a href="//hungryhippo.app" target="_blank" rel="noopener noreferrer">
      <div className="project-show">
        <div className="parent-container" id="hippo">
          <div
            className="child-container"
            style={{ width: "450px", marginLeft: "0px" }}
          >
            <img src={Hippo} alt="" className="child-img" id="hippo" />
          </div>
        </div>
      </div>
    </a>
    <ProjectDetails
      title="HUNGRY HIPPO RECIPES"
      description="Recipe management application that allows users to store and share personal and family recipes, with the addition of many useful tools to make life in the kitchen that much better."
      dates="PERSONAL • 2019 - PRESENT"
    />
  </ProjectContainer>
);

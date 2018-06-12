import React from 'react';
import CanvasLogo from '../../img/canvas.png'
import ProjectContainer from './Project/ProjectContainer';
import ProjectDetails from './Project/ProjectDetails';

export default () => (
    <ProjectContainer>
        <a href='//github.com/unsupported/canvas' target="_blank" rel="noopener noreferrer">
            <div className="project-show">
                <div className="parent-container" id='canvas'>
                    <div className="child-container" id="canvas-child">
                        <img src={CanvasLogo} alt="" className="child-img" id="canvas-logo" />
                    </div>
                </div>
            </div>
        </a>
        <ProjectDetails
            title="CANVAS IMPLEMENTATIONS"
            description="A collection of Ruby scripts created for automating manual workflows to improve efficiencies
                (links to shared Github repository)"
            dates="IMPLEMENTATION CONSULTANT • 2015 - 2018"
        />
    </ProjectContainer>
)






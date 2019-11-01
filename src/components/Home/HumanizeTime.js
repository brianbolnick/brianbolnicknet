import React from 'react';
import Hex from '../../img/hex.png'
import ProjectContainer from './Project/ProjectContainer';
import ProjectDetails from './Project/ProjectDetails';

export default () => (
    <ProjectContainer>
	<a href='//hex.pm/packages/humanize_time' target="_blank" rel="noopener noreferrer">
            <div className="project-show">
                <div className="parent-container" id='humanize'>
                    <div className="child-container" style={{ width: '450px', marginLeft: '0px' }}>
                        <img src={Hex} alt="" className="child-img" id="hex" />
                    </div>
                </div>
            </div>
        </a>
        <ProjectDetails
            title="HUMANIZE TIME"
            description="Elixir open-source library for converting seconds and miliseconds into human readable times"
	dates="PERSONAL/PODIUM • 2019"
        />
    </ProjectContainer>
)

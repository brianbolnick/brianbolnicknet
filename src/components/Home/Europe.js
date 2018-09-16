import React from 'react';
import Plane from '../../img/plane.png'
import ProjectContainer from './Project/ProjectContainer';
import ProjectDetails from './Project/ProjectDetails';

export default () => (
    <ProjectContainer>
        <a href='//our-europe-trip.herokuapp.com' target="_blank" rel="noopener noreferrer">
            <div className="project-show">
                <div className="parent-container" id='europe'>
                    <div className="child-container" style={{ width: '450px', marginLeft: '0px' }}>
                        <img src={Plane} alt="" className="child-img" id="plane" />
                    </div>
                </div>
            </div>
        </a>
        <ProjectDetails
            title="EUROPE TRIP"
            description="Minor application built in React and Node.js to plan a trip to Europe in Fall 2018. It includes a Todo list tracker as
            well as the travel itinerary."
            dates="PERSONAL • 2017 - PRESENT"
        />
    </ProjectContainer>
)
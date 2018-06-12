import React from 'react';
import { Link } from 'react-router-dom';
import GilagoatLogo from '../../img/gilagoat-demo.png'
import ProjectContainer from './Project/ProjectContainer';
import ProjectDetails from './Project/ProjectDetails';

export default () => (
    <ProjectContainer>
        <Link to='/gilagoat'>
            <div className="project-show">
                <div className="parent-container" id='gilagoat'>
                    <div className="child-container" style={{ width: '450px', marginLeft: '0px' }}>
                        <img src={GilagoatLogo} alt="" className="child-img" id="gilagoat-logo" />
                    </div>
                </div>
            </div>
        </Link>
        <ProjectDetails
            title="GILAGOAT"
            description="React/Redux and Node.js application built to showcase the company's trailer product."
            dates="FREELANCE • 2018 - PRESENT"
        />
    </ProjectContainer>
)
import React from 'react';
import { Link } from 'react-router-dom';
import IcpmLogo from '../../img/icpm-demo.png'
import ProjectContainer from './Project/ProjectContainer';
import ProjectDetails from './Project/ProjectDetails';

export default () => (
    <ProjectContainer>
        <Link to='icpm'>
            <div className="project-show">
                <div className="parent-container" id="icpm">
                    <div className="child-container" style={{ width: '450px', marginLeft: '25px' }}>
                        <img src={IcpmLogo} alt="" className="child-img" />
                    </div>
                </div>
            </div>
        </Link>
        <ProjectDetails
            title="IC PROJECT MANAGEMENT"
            description="React/Redux and Node.js application built to better streamline the Canvas
                Implementation process and management. Includes project dashboard and tracking,
                email template generator, contact lists, and more."
            dates="INSTRUCTURE • 2017 - 2018"
        />
    </ProjectContainer>
)
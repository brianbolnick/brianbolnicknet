import React from 'react';
import { Link } from 'react-router-dom';
import SelloutLogo from '../../img/sellout-demo.png'
import ProjectContainer from './Project/ProjectContainer';
import ProjectDetails from './Project/ProjectDetails';

export default () => (
    <ProjectContainer>
        <Link to='sellout'>
            <div className="project-show">
                <div className="parent-container" id='sellout'>
                    <div className="child-container" style={{ width: '450px', marginLeft: '0px' }}>
                        <img src={SelloutLogo} alt="" className="child-img" id="sellout-logo" />
                    </div>
                </div>
            </div>
        </Link>
        <ProjectDetails
            title="SELLOUT"
            description="PHP application developed for IS 4460 (Web Application Development) at the University of Utah.
                Classifieds site made specifically for College students to create and sell product listings."
            dates="UNIVERSITY OF UTAH • 2018"
        />
    </ProjectContainer>
)
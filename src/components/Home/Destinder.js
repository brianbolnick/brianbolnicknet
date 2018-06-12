import React from 'react';
import { Link } from 'react-router-dom';
import DestinderLogo from '../../img/destiny-demo.png'
import ProjectContainer from './Project/ProjectContainer';
import ProjectDetails from './Project/ProjectDetails';

export default () => (
    <ProjectContainer>
        <Link to='destinder'>
            <div className="project-show">
                <div className="parent-container" id="destinder">
                    <div className="child-container" style={{ width: '450px', marginLeft: '0px' }}>
                        <img src={DestinderLogo} alt="" className="child-img" id="destinder-logo" />
                    </div>
                </div>
            </div>
        </Link>
        <ProjectDetails
            title="DESTINDER"
            description={
                <span> React/Redux and Rails application that helps players of
                {' '}<a href="https://www.destinythegame.com/" className="inline-link" target="_blank" rel="noopener noreferrer">Destiny the Game</a>{' '}
                track game stats and find people to play with. Implements JWT and oAuth authentication to pull real-time data from Bungie's API.</span>
            }
            dates="PERSONAL • 2017 - PRESENT"
        />
    </ProjectContainer>
)
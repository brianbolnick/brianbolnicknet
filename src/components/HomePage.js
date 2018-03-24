import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Photo from '../img/me-clip.png'
import IcpmLogo from '../img/icpm-demo.png'
import DestinderLogo from '../img/destiny-demo.png'
import GilagoatLogo from '../img/gilagoat-demo.png'
import SelloutLogo from '../img/sellout-demo.png'
import Layout from './Layout'



class HomePage extends Component {
    render() {
        return (
            <Layout>
                <div className="home-top-container">
                    <div className="top-content">
                        <div className="top-title">Hello!</div>
                        <div className="top-desc">
                            I'm a Software Engineer and Designer focused on web development. Majoring in Information Systems at the University of Utah.
                        </div>
                        <div className="top-desc">
                            Currently Software Engineer III at <a href="https://lds.org" className="inline-link" target="_blank" rel="noopener noreferrer">The Church of Jesus Christ of Latter-Day Saints</a>.
                            Previously at <a href="https://instructure.com" className="inline-link" target="_blank" rel="noopener noreferrer">Instructure. </a>
                        </div>
                    </div>
                    <div className="top-image">
                        <img src={Photo} alt="" className="self-image" />
                    </div>
                </div>
                <div className="scroll-container">
                    <a href="#main-content">
                        <Icon name='angle down' size='huge' />
                    </a>
                </div>
                <div className="main-content" id="main-content" ref="first">
                    <div className="project-container">
                        <Link to='icpm'>
                            <div className="project-show">
                                <div className="parent-container" id="icpm">
                                    <div className="child-container" style={{ width: '450px', marginLeft: '25px' }}>
                                        <img src={IcpmLogo} alt="" className="child-img" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="project-details">
                            <div className="project-title">
                                IC PROJECT MANAGEMENT
                                </div>
                            <div className="project-desc">
                                React/Redux and Node.js application built to better streamline the Canvas
                                Implementation process and management. Includes project dashboard and tracking,
                                email template generator, contact lists, and more.

                            </div>
                            <div className="project-dates">
                                INSTRUCTURE • 2017 - 2018
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        <Link to='destinder'>
                            <div className="project-show">
                                <div className="parent-container" id="destinder">
                                    <div className="child-container" style={{ width: '450px', marginLeft: '0px' }}>
                                        <img src={DestinderLogo} alt="" className="child-img" id="destinder-logo"/>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="project-details">
                            <div className="project-title">
                                DESTINDER
                            </div>
                            <div className="project-desc">
                                React/Redux and Rails application that helps players of
                                 {' '} <a href="https://www.destinythegame.com/" className="inline-link" target="_blank" rel="noopener noreferrer">Destiny the Game</a>{' '}
                                track game stats and find people to play with. Implements JWT and oAuth authentication to pull real-time data from Bungie's API.
                            </div>
                            <div className="project-dates">
                                PERSONAL • 2017 - PRESENT
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        <Link to='sellout'>
                            <div className="project-show">
                                <div className="parent-container" id='sellout'>
                                    <div className="child-container" style={{ width: '450px', marginLeft: '0px' }}>
                                        <img src={SelloutLogo} alt="" className="child-img" id="sellout-logo"/>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="project-details">
                            <div className="project-title">
                                SELLOUT
                            </div>
                            <div className="project-desc">
                                PHP application developed for IS 4460 (Web Application Development) at the University of Utah.
                                Classifieds site made specifically for College students to create and sell product listings.
                            </div>
                            <div className="project-dates">
                                UNIVERSITY OF UTAH • 2018
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        <Link to='/gilagoat'>
                            <div className="project-show">
                                <div className="parent-container" id='gilagoat'>
                                    <div className="child-container" style={{ width: '450px', marginLeft: '0px' }}>
                                        <img src={GilagoatLogo} alt="" className="child-img" id="gilagoat-logo"/>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="project-details">
                            <div className="project-title">
                                GILAGOAT
                            </div>
                            <div className="project-desc">
                                React/Redux and Node.js application built to showcase the company's trailer product.
                            </div>
                            <div className="project-dates">
                                FREELANCE • 2018 - PRESENT
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default HomePage;
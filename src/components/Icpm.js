import React, { Component } from 'react';
import Home from '../img/icpm-dashboard.png'
import Layout from './Layout'
import HomeFull from '../img/icpm-dashboard.png'
import NotesFull from '../img/icpm-project-notes.png'
import Tasks from '../img/showcase-icpm-project-tasks.png'
import Signup from '../img/showcase-icpm-signup.png'
import Login from '../img/showcase-icpm-login.png'
import Contacts from '../img/icpm-contacts.png'

import erd from '../img/icpm-erd.png'

class Icpm extends Component {
    render() {
        return (
            <Layout>
                <div className="showcase-top-container" id="icpm-showcase">
                    <div className="showcase-title">IC Project Management</div>
                    <div className="showcase-main-img">
                        <img src={Home} alt="" />
                    </div>
                </div>
                <div className="showcase-main-content" id="showcase-main-content" ref="first">
                    <div className='single-showcase-container'>
                        <div className="divider" style={{ marginBottom: '30px' }}></div>
                        <div className="showcase-background">
                            While working as an Implementation Consultant at Instructure, project management played a
                            huge role in successfully implementing new instances of the Canvas LMS. The team was previously
                            using a plethera of tools, each of which fulfilled a particular need that was absent from the other.
                            The goal of ICPM was to combine the best and most useful pieces of each tool in a single application.
                            This would make the administration and management of every project more stream-lined and accessible.
                            I also used this tool as a training resource for co-workers who were interested in getting started with
                            web development. The application features overall project dashboards, individual milestone progress and
                            status tracking, project sponsor and contact storage, and email template generations.
                            <br /><br />
                            I had also planned to build live integrations with Financialforce (the main CRM) to pull in particular project
                            information, as well as additional functionality and interactivity within project details. However, I left
                            Instructure before I was able to fully complete the project.
                        </div>
                    </div>
                </div>

                <div className="showcase-second">
                    <div className="showcase-stack">
                        <div className="showcase-section-title">
                            Technology
                            </div>
                        <div className="tech-stack">
                            <div className="tech-headers">
                                <div className="tech-header">Front End:</div>
                                <div className="tech-header">Back End:</div>
                                <div className="tech-header">Database:</div>
                                <div className="tech-header">Authentication:</div>
                                <div className="tech-header">State Management:</div>
                            </div>
                            <div className="tech-values">
                                <div className="tech-value">React.js</div>
                                <div className="tech-value">Node.js</div>
                                <div className="tech-value">MongoDB</div>
                                <div className="tech-value">Local (Passport + JWT)</div>
                                <div className="tech-value">Redux</div>
                            </div>
                        </div>
                    </div>
                    <div className="architecture">
                        <div className="showcase-section-title">Database Architecture</div>
                        <img src={erd} alt="icpm-erd" className="erd" />
                    </div>
                </div>
                <div className="showcase-third">
                    <div className="authentication">
                        <div className="showcase-split-title">Authentication</div>
                        <div className="showcase-split-text">
                            ICPM implements local authentication with the Passport NPM. The app is held within a single
                            file structure, but the server and client are two separate applications. For this purpose, I also
                            implemented JWTs to validate and authenticate HTTP requests from the client to the server.
                            <br /><br />
                            The User's registration email is saved into the database with a salted and hashed password. Each login
                            attempt is compared to the hashed value, which then uses a Redux <code>push</code> to forward the user to
                            the main dashboard page.
                        </div>
                    </div>
                    <div className="showcase-double-img">
                        <img src={Signup} alt="" className="double-img"/>
                        <img src={Login} alt=""  className="double-img"/>
                    </div>
                </div>
                <div className="showcase-fourth">
                    <div className="feature-left">
                        <div className="showcase-split-text">
                            The dashboard (or home page) lists each project belonging to the Implementation Consultant. As this information
                           is stored in the database, a Redux <code>fetch</code> action is dispatched when the page loads to retrieve all
                              projects belonging to the authenticated user.
                           <br /><br />
                            Each card displays general information about the project, as well
                           as an outline of the progress for each implementation milestone. Clicking on a card brings you to the main project
                           view page.
                        </div>
                        <div className="showcase-split-title">Dashboard</div>
                    </div>
                    <div className="showcase-single-img">
                        <img src={HomeFull} alt="" width="100%" />
                    </div>
                </div>
                <div className="showcase-fifth">
                    <div className="feature-right">
                        <div className="showcase-split-title">Project View</div>
                        <div className="showcase-split-text">
                            The project view shows specific information for a single project. The main view consists of
                            an overview of implementation milestones (SIS, Branding, Authentication, Migration, and Other).
                            Each sub-task of the milestones are able to be completed from this view, updating the overall milestone
                           progress. The client sends an <code>HTTP PUT</code> request to the server to update the task status.
                             More information about the project as a whole is also displayed.
                        </div>
                    </div>
                    <div className="showcase-single-img">
                        <img src={Tasks} alt="" className="single-img"/>
                    </div>
                </div>
                <div className="showcase-sixth">
                    <div className="feature-left">
                        <div className="showcase-split-text">
                            The other sections of a project view are the project contacts and note tracker. Contacts allows the
                            user to add points of contact for the project with designated role and contact information. All of this
                            data is easily visible, and allows the user to send an email directly to a contact if desired.
                            <br /><br />
                            The notes view is a collection of rich content editors that help to generate a
                            <span style={{ fontWeight: "600" }}> Weekly Status Call</span> email template. I created this feature to help
                            save time by granting the IC the ability to take all notes for the status call in the application itself and
                            then easily convert it into an email that is sendable to the client. The email template also pulls in additional
                            project information (dates, project folder links, etc.). My roadmap planned to include a feature that would allow
                            you to select stored contacts before creating the template so it would pre-populate everything you need in order to
                            send it off.
                        </div>
                        <div className="showcase-split-title">Contacts and Notes</div>
                    </div>
                    <div className="showcase-double-img">
                        <img src={Contacts} alt=""  style={{ margin: '10px' }} className="double-img"/>
                        <img src={NotesFull} alt="" style={{ margin: '10px' }} className="double-img"/>
                    </div>
                    <div className="visit-link">
                        <a href="https://icpm.herokuapp.com" className="showcase-link-dark">VISIT THE SITE</a>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Icpm;
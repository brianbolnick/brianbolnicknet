import React, { Component } from 'react';
import Home from '../img/icpm-dashboard.png'
import Layout from './Layout'
import { Image, Modal, Divider, Grid } from 'semantic-ui-react';
import Home2 from '../img/showcase-icpm-dashboard.png'
import HomeFull from '../img/icpm-dashboard.png'
import Notes from '../img/showcase-icpm-project-notes.png'
import NotesFull from '../img/icpm-project-notes.png'
import Tasks from '../img/showcase-icpm-project-tasks.png'
import TasksFull from '../img/icpm-project-tasks.png'
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
                        <Divider hidden style={{ marginBottom: '30px' }} />
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
                    <Grid columns={2} doubling>
                        <Divider hidden />
                        <Grid.Row>
                            <Grid.Column computer={8}>
                                <Modal closeIcon trigger={<Image src={Home2} fluid className="main-showcase-img" />}>
                                    <Image src={HomeFull} fluid />
                                </Modal>
                            </Grid.Column>
                            <Grid.Column computer={8}>
                                <Modal closeIcon trigger={<Image src={Tasks} fluid className="main-showcase-img" />}>
                                    <Image src={TasksFull} fluid />
                                </Modal>
                            </Grid.Column>
                            <Grid.Column computer={8}>
                                <Modal closeIcon trigger={<Image src={Notes} fluid className="main-showcase-img" />}>
                                    <Image src={NotesFull} fluid />
                                </Modal>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{ marginBottom: '100px' }}>
                            <Grid.Column textAlign='center' style={{ textAlign: 'center', width: '100%' }}>
                                <a href="https://icpm.herokuapp.com/" className="showcase-link">VISIT THE SITE</a>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider hidden />
                    </Grid>
                </div>

            </Layout>
        )
    }
}

export default Icpm;
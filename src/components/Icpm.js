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
                        <Grid columns={2} doubling>
                            <Grid.Row style={{ justifyContent: 'center' }}>
                                <div className="showcase-info">
                                    <Grid centered relaxed textAlign='center' doubling>
                                        <Grid.Row>
                                            <Grid.Column textAlign='center' computer={4} mobile={8}>
                                                <div className="showcase-value">REACT</div>
                                                <div className="showcase-type">FRONT</div>
                                            </Grid.Column>
                                            <Grid.Column textAlign='center' computer={4} mobile={8}>
                                                <div className="showcase-value">REDUX</div>
                                                <div className="showcase-type">STATE</div>
                                            </Grid.Column>
                                            <Grid.Column textAlign='center' computer={4} mobile={8}>
                                                <div className="showcase-value">NODE</div>
                                                <div className="showcase-type">BACK</div>
                                            </Grid.Column>
                                            <Grid.Column textAlign='center' computer={4} mobile={8}>
                                                <div className="showcase-value">MONGO</div>
                                                <div className="showcase-type">DB</div>
                                            </Grid.Column>

                                        </Grid.Row>
                                    </Grid>
                                </div>
                            </Grid.Row>
                            <Divider hidden />
                            <Grid.Row>
                                <div className="showcase-details">
                                    ICPM is a project management tool I am currently building to learn the MERN stack.
                                    It will feature a project dashboard allowing the user to save and update various tasks
                                    as well as send emails from predefined templates.
                                </div>
                            </Grid.Row>
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
                </div>
            </Layout>
        )
    }
}

export default Icpm;
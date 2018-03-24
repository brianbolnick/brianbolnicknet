import React, { Component } from 'react';
import Layout from './Layout'
import { Image, Modal, Divider, Grid } from 'semantic-ui-react';
import Home from '../img/showcase-gilagoat-home.gif'
import HomeFull from '../img/gilagoat-home.gif'
import Login from '../img/showcase-gilagoat-login.png'
import LoginFull from '../img/gillagoat-login.png'
import Admin from '../img/showcase-gilagoat-admin.png'
import AdminFull from '../img/gilagoat-admin.png'


class Icpm extends Component {
    render() {
        return (
            <Layout>
                <div className="showcase-top-container" id="icpm-showcase">
                    <div className="showcase-title">Gilagoat Trailers</div>
                    <div className="showcase-main-img">
                        <img src={HomeFull} alt="" />
                    </div>
                </div>
                <div className="showcase-main-content" id="showcase-main-content">
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
                                    This website is for Gilagoat popup camper trailers. It is currently in progress.
                                    This is a side job done for freelancing work to showcase the company's product.
                                </div>
                            </Grid.Row>
                            <Divider hidden />
                            <Grid.Row>
                                <Grid.Column computer={8}>
                                    <Modal closeIcon trigger={<Image src={Home} fluid className="main-showcase-img" />}>
                                        <Image src={HomeFull} fluid />
                                    </Modal>
                                </Grid.Column>
                                <Grid.Column computer={8}>
                                    <Modal closeIcon trigger={<Image src={Login} fluid className="main-showcase-img" />}>
                                        <Image src={LoginFull} fluid />
                                    </Modal>
                                </Grid.Column>
                                <Grid.Column computer={8}>
                                    <Modal closeIcon trigger={<Image src={Admin} fluid className="main-showcase-img" />}>
                                        <Image src={AdminFull} fluid />
                                    </Modal>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style={{ marginBottom: '100px' }}>
                                <Grid.Column textAlign='center' style={{ textAlign: 'center', width: '100%' }}>
                                    <a href="https://gilagoat.herokuapp.com" className="showcase-link">VISIT THE SITE</a>
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
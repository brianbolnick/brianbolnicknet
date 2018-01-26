import React, { Component } from 'react'
import Layout from './Layout'
import { Image, Modal, Divider, Grid } from 'semantic-ui-react';
import Home from '../../img/showcase-destinder-home.png'
import Ft1 from '../../img/showcase-destinder-ft1.png'
import Lfg from '../../img/showcase-destinder-lfg.png'
import Profile from '../../img/showcase-destinder-profile.png'


class Destinder extends Component {
    render() {
        return (
            <Layout>
                <div style={{ textAlign: 'center', minHeight: '100%' }}>
                    <div className='showcase-heading'>DESTINDER</div>
                    <div className='single-showcase-container'>
                        <Divider hidden style={{ marginBottom: '30px' }} />
                        <Grid columns={2} doubling>
                            <Grid.Row style={{ justifyContent: 'center' }}>
                                <div className="showcase-info">
                                    <Grid centered relaxed textAlign='center' doubling>
                                        <Grid.Row>
                                            <Grid.Column textAlign='centered' computer={4} mobile={8}>
                                                <div className="showcase-value">REACT</div>
                                                <div className="showcase-type">FRONT</div>
                                            </Grid.Column>
                                            <Grid.Column textAlign='centered' computer={4} mobile={8}>
                                                <div className="showcase-value">REDUX</div>
                                                <div className="showcase-type">STATE</div>
                                            </Grid.Column>
                                            <Grid.Column textAlign='centered' computer={4} mobile={8}>
                                                <div className="showcase-value">RAILS</div>
                                                <div className="showcase-type">BACK</div>
                                            </Grid.Column>
                                            <Grid.Column textAlign='centered' computer={4} mobile={8}>
                                                <div className="showcase-value">PG</div>
                                                <div className="showcase-type">DB</div>
                                            </Grid.Column>

                                        </Grid.Row>
                                    </Grid>
                                </div>
                            </Grid.Row>
                            <Divider hidden />
                            <Grid.Row>
                                <div className="showcase-details">
                                    Destinder is site built for Destiny the Game. It features a "Looking For Group" segment
                                    that allows players to find teammate and some stat tracking features. All data is pulled in
                                    real-time via Bungie's API.
                                </div>
                            </Grid.Row>
                            <Divider hidden />
                            <Grid.Row>
                                <Grid.Column computer={8}>
                                    <Modal closeIcon trigger={<Image src={Home} fluid className="main-showcase-img" />}>
                                        <Image src={Home} fluid className="main-showcase-img" />
                                    </Modal>

                                </Grid.Column>
                                <Grid.Column computer={8}>
                                    <Modal closeIcon trigger={<Image src={Ft1} fluid className="main-showcase-img" />}>
                                        <Image src={Ft1} fluid className="main-showcase-img" />
                                    </Modal>
                                </Grid.Column>
                                <Grid.Column computer={8}>
                                    <Modal closeIcon trigger={<Image src={Lfg} fluid className="main-showcase-img" />}>
                                        <Image src={Lfg} fluid className="main-showcase-img" />
                                    </Modal>
                                </Grid.Column>
                                <Grid.Column computer={8}>
                                    <Modal closeIcon trigger={<Image src={Profile} fluid className="main-showcase-img" />}>
                                        <Image src={Profile} fluid className="main-showcase-img" />
                                    </Modal>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style={{ marginBottom: '100px' }}>
                                <Grid.Column textAlign='centered'>
                                    <a href="https://destinder.com" className="showcase-link">VISIT THE SITE</a>
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

export default Destinder;
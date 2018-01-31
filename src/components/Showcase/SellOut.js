import React, { Component } from 'react'
import Layout from './Layout'
import { Image, Modal, Divider, Grid } from 'semantic-ui-react';
import Home from '../../img/showcase-sellout-home-op.jpg'
import Listings from '../../img/showcase-sellout-listings-op.jpg'
import Login from '../../img/showcase-sellout-login-op.jpg'
import HomeFull from '../../img/sellout-home-op.jpg'
import ListingsFull from '../../img/sellout-listings-op.jpg'
import LoginFull from '../../img/sellout-login-op.jpg'


class SellOut extends Component {
    render() {
        return (
            <Layout>
                <div style={{ textAlign: 'center', minHeight: '100%' }}>
                    <div className='showcase-heading'>SELLOUT</div>
                    <div className='single-showcase-container'>
                        <Divider hidden style={{ marginBottom: '30px' }} />
                        <Grid columns={2} doubling>
                            <Grid.Row style={{ justifyContent: 'center' }}>
                                <div className="showcase-info">
                                    <Grid centered relaxed textAlign='center' doubling>
                                        <Grid.Row>
                                            <Grid.Column textAlign='centered' computer={4} mobile={8}>
                                                <div className="showcase-value">HTML</div>
                                                <div className="showcase-type">FRONT</div>
                                            </Grid.Column>
                                            <Grid.Column textAlign='centered' computer={4} mobile={8}>
                                                <div className="showcase-value">N/A</div>
                                                <div className="showcase-type">STATE</div>
                                            </Grid.Column>
                                            <Grid.Column textAlign='centered' computer={4} mobile={8}>
                                                <div className="showcase-value">PHP</div>
                                                <div className="showcase-type">BACK</div>
                                            </Grid.Column>
                                            <Grid.Column textAlign='centered' computer={4} mobile={8}>
                                                <div className="showcase-value">MYSQL</div>
                                                <div className="showcase-type">DB</div>
                                            </Grid.Column>

                                        </Grid.Row>
                                    </Grid>
                                </div>
                            </Grid.Row>
                            <Divider hidden />
                            <Grid.Row>
                                <div className="showcase-details">
                                    SellOut is a classifieds application for college students. This is a project I built
                                    for a Web Applications class at the University of Utah. It features a native login and user
                                    creation, and simple CRUD options for listing advertisements.
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
                                    <Modal closeIcon trigger={<Image src={Listings} fluid className="main-showcase-img" />}>
                                        <Image src={ListingsFull} fluid />
                                    </Modal>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style={{ marginBottom: '100px' }}>
                                <Grid.Column textAlign='centered'>
                                    <a href="https://young-eyrie-43253.herokuapp.com/" className="showcase-link">VISIT THE SITE</a>
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

export default SellOut;
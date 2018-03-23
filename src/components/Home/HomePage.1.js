import React, { Component } from 'react';
import { Menu, Header, Image, Grid, Table } from 'semantic-ui-react';
import { Animate } from 'grommet';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import Pulse from 'grommet/components/icons/Pulse';
import DownIcon from 'grommet/components/icons/base/Down';
import Parallax from 'react-springy-parallax';
import BG from '../../img/venice2.jpg';
import Logo from '../../img/BB2.png';
import '../../css/Home.css';
import NavHeader from './Header';
import Footer from './Footer';
import DestinderHome from '../../img/destinder-home-op.jpg'
import SellOutHome from '../../img/sellout-home-op.jpg'
import IcpmHome from '../../img/icpm-dashboard.png'
import GilagoatHome from '../../img/gilagoat-home.gif'


class TypedHeader extends React.Component {
    componentDidMount() {
        const options = {
            strings: [
                'Husband', "Father", "Full Stack Developer",
                "Hockey Player", "Mormon", "Snowboarder",
                "Italian Speaker", "Chef", "Apple Enthusiast"
            ],
            loop: true,
            startDelay: 2000,
            backDelay: 1000,
            typeSpeed: 80,
            showCursor: true,
            cursorChar: "|",
            shuffle: true
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
        // to prevent memory leaks
        this.typed.destroy();
    }

    render() {
        return (
            <span ref={(el) => { this.el = el; }} />
        );
    }
}

class Second extends Component {

    render() {


        return (
            <div className="showcase-container">
                <div style={{ textAlign: 'center' }}>
                    <Header as='h1' className="portfolio-header" >Portfolio</Header>
                </div>
                <Grid doubling columns={2} className="showcase-grid">
                    <Grid.Column>
                        <div className="showcase-item">
                            <figure className="showcase-figure">
                                <img src={DestinderHome} width='100%' alt='destinder' />
                                <figcaption>
                                    <h3>Destinder</h3>
                                    <h4>Looking For Group and Stat Tracker for Destiny the Game</h4>
                                </figcaption>
                                <Link to='/destinder' />
                            </figure>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="showcase-item">
                            <figure className="showcase-figure">
                                <img src={SellOutHome} width='100%' alt='sellout' />
                                <figcaption>
                                    <h3>SellOut</h3>
                                    <h4>Classifieds App for College Students</h4>
                                </figcaption>
                                <Link to='/sellout' />
                            </figure>
                        </div>
                    </Grid.Column>
                    <Grid.Column style={{ paddingTop: '0' }}>
                        <div className="showcase-item">
                            <figure className="showcase-figure">
                                <img src={IcpmHome} width='100%' alt='icpm' />
                                <figcaption>
                                    <h3>IC PM Tool</h3>
                                    <h4>Project Management Tool for Canvas IC's</h4>
                                </figcaption>
                                <Link to='/icpm' />
                            </figure>
                        </div>
                    </Grid.Column>
                    <Grid.Column style={{ paddingTop: '0' }}>
                        <div className="showcase-item">
                            <figure className="showcase-figure">
                                <img src={GilagoatHome} width='100%' alt='gilagoat' />
                                <figcaption>
                                    <h3>Gilagoat</h3>
                                    <h4>Popup Trailer Business</h4>
                                </figcaption>
                                <Link to='/gilagoat' />
                            </figure>
                        </div>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

class Landing extends Component {
    render() {
        return (
            <div>
                <Animate enter={{ "animation": "fade", "duration": 2000, "delay": 1000 }} keep={true}>
                    <Image src={Logo} size='medium' onClick={this.props.clickEvent} />
                    <Header className="typed-header" as='h1'><TypedHeader /></Header>

                    <Menu fluid widths={1} fixed='bottom' secondary >
                        <Menu.Menu>
                            <Menu.Item>
                                <Pulse icon={<DownIcon />} onClick={this.props.clickEvent} />
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Animate>
            </div>
        )
    }
}

// eslint-disable-next-line
class Third extends Component {
    render() {
        return (
            <div className="table-container">
                <Table basic='very' celled collapsing>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Project</Table.HeaderCell>
                            <Table.HeaderCell>Front</Table.HeaderCell>
                            <Table.HeaderCell>Back</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Header.Content>
                                        Bulk Content Migration Station
                                <Header.Subheader>Instructure - Content Migration Specialist</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>
                                Rails
                        </Table.Cell>
                            <Table.Cell>
                                Rails
                        </Table.Cell>
                            <Table.Cell>
                                An internal tool to help the automation and reporting process of bulk migrating LMS content to Canvas
                        </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Header.Content>
                                        Canvas Admin Scripts
                                <Header.Subheader>Instructure - Implementation Project Manager</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>
                                Ruby
                        </Table.Cell>
                            <Table.Cell>
                                Ruby
                        </Table.Cell>
                            <Table.Cell>
                                A variety of scripts custom built to assist in the automation of many processes for Higher-Ed schools.
                        </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

class HomePage extends Component {
    render() {
        const styles = {
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
        return (
            <div>
                <Parallax ref="parallax" pages={3.2}>
                    <Parallax.Layer offset={0} speed={0} factor={3.3} style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPositionY: 'center' }} />
                    <Parallax.Layer offset={3} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                    <Parallax.Layer
                        offset={0}
                        speed={0.5}
                        style={styles}
                    >
                        <NavHeader />
                        <Landing token={this.props.token} clickEvent={() => this.refs.parallax.scrollTo(1.2)} />
                    </Parallax.Layer>

                    <Parallax.Layer
                        offset={1.2}
                        speed={-0.1}
                    >
                        <Second clickEvent={() => this.refs.parallax.scrollTo(2.2)} />
                    </Parallax.Layer>

                    <Parallax.Layer
                        offset={2.2}
                        speed={-0.1}
                    >
                        <div style={{ textAlign: 'center' }}>
                            <Header as='h1' className="portfolio-header" >More Coming Soon!</Header>
                        </div>
                        {/* <Third clickEvent={() => this.refs.parallax.scrollTo(0)} /> */}
                        <Footer />
                    </Parallax.Layer>
                </Parallax>
            </div>

        )
    }
}

export default HomePage;
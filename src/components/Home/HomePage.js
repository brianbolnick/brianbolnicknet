import React, { Component } from 'react';
import { Menu, Header, Image, Grid } from 'semantic-ui-react';
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
import DestinderHome from '../../img/destinder-home.png'
import SellOutHome from '../../img/sellout-home.png'
import IcpmHome from '../../img/icpm-home.png'


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
            typeSpeed: 70,
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
                                <a href="https://young-eyrie-43253.herokuapp.com/" rel="noopener noreferrer" target='_blank'> </a>
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
                                <a href="https://icpm.herokuapp.com/" rel="noopener noreferrer" target='_blank'> </a>
                            </figure>
                        </div>
                    </Grid.Column>
                </Grid>
                <Footer />
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

class HomePage extends Component {
    render() {
        const styles = {
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
        return (
            <div>
                <Parallax ref="parallax" pages={2.2}>
                    <Parallax.Layer offset={0} speed={0} factor={2.3} style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPositionY: 'center' }} />
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
                        <Second clickEvent={() => this.refs.parallax.scrollTo(0)} />
                    </Parallax.Layer>
                </Parallax>
            </div>

        )
    }
}

export default HomePage;
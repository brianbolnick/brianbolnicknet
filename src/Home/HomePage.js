import React, { Component } from 'react';
import { Menu, Header, Icon, Table, Image, Divider, Grid } from 'semantic-ui-react';
import { Anchor, Columns, Box, Animate, Value, Label, Paragraph, Heading, Meter, List, ListItem } from 'grommet';
import Typed from 'typed.js';
import BookIcon from 'grommet/components/icons/base/Book';
import BriefcaseIcon from 'grommet/components/icons/base/Briefcase';
import Pulse from 'grommet/components/icons/Pulse';
import DownIcon from 'grommet/components/icons/base/Down';
import PersonalIcon from 'grommet/components/icons/base/PersonalComputer';
import Parallax from 'react-springy-parallax';
import BG from '../img/venice2.jpg';
import Logo from '../img/BB2.png';
import './Home.css';
// import Carousel from 'nuka-carousel';
import createReactClass from 'create-react-class';
import NavHeader from './Header';
import Footer from './Footer';
import { push } from 'react-router-redux';
import { bindActionReducers } from 'redux';
import { connect } from 'react-redux';
import DestinderHome from '../img/destinder-home.png'
import DestinderLfg from '../img/destinder-lfg.png'
import SellOutHome from '../img/sellout-home.png'
import SellOutListings from '../img/sellout-listings.png'
import IcpmHome from '../img/icpm-home.png'


class TypedHeader extends React.Component {
    componentDidMount() {
        const options = {
            strings: [
                'Husband', "Father", "Developer",
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

class Education extends Component {
    render() {
        const eduHeader = (
            <Heading strong={false}
                uppercase={true}
                truncate={false}
                align='center'
                margin='small'
                style={{ color: '#f9e33c' }}>
                Education
          </Heading>
        )

        return (
            <Box align='center'
                pad='medium'
                margin='small'
                className='home-info-box'>
                <Value value={eduHeader}
                    icon={<BookIcon size='medium' style={{ color: '#f5f5f5' }} />}
                    label='University of Utah'
                />
                <Paragraph size='medium'>
                    I am currently pursuing a Bachelor of Science Degree in Information Systems
                    and a Minor in Computer Science. I will have completed my education by August 2018.
                </Paragraph>

                <Box align='center'>
                    <Meter type='circle'
                        size='xsmall'
                        label={<Value value={84}
                            units='%'
                            size='small'
                            responsive={true} />}
                        value={84}
                    />
                    <Box direction='row'
                        justify='between'
                        pad={{ "between": "small" }}
                        responsive={false}>
                        <Label size='small' style={{ color: '#f5f5f5' }} >
                            BS in Information Systems Progress<br />
                        </Label>
                    </Box>
                </Box>
                <Table inverted className='hide-on-mobile' style={{ border: 'solid 1px #f9e33d', marginTop: '20px' }}>
                    <Table.Header>
                        <Table.Row>

                            <Table.HeaderCell>Featured Courses</Table.HeaderCell>
                            <Table.HeaderCell>3.418 GPA</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Data Structures & Algorithms</Table.Cell>
                            <Table.Cell>Database Fundamentals</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Systems Analysis and Design</Table.Cell>
                            <Table.Cell>Software Engineering</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Box>

        )
    }
}

class Professional extends Component {
    render() {
        const eduHeader = (
            <Heading strong={false}
                uppercase={true}
                truncate={false}
                align='center'
                margin='small'
                style={{ color: '#22CCE9' }}>
                Professional
          </Heading>
        )

        return (
            <Box align='center'
                pad='medium'
                margin='small'
                className='home-info-box'>
                <Value value={eduHeader}
                    icon={<BriefcaseIcon size='medium' style={{ color: '#f5f5f5' }} />}
                    label='Implementation Consultant'
                />
                <Paragraph size='medium'>
                    I work at an EdTech company called <Anchor label='Instructure' style={{ color: 'rgb(34, 204, 233)' }} href='https://instructure.com' target='_blank' />.
                    In my role as an Implementation Consultant Project Manager, my main responsability is to aid Higher Ed Institutions with
                    start-to-end technical implementations of the <Anchor label='Canvas LMS' style={{ color: 'rgb(34, 204, 233)' }} href='https://canvaslms.com' target='_blank' />.
                    You can read more about my tasks and experiences <Anchor label=' here' style={{ color: 'rgb(34, 204, 233)' }} path='/professional' target='_blank' />.
                </Paragraph>
                <List>
                    <ListItem justify='between' >
                        <Anchor className='prof-anchor' label='Migration Station' href='#' primary={true} />
                    </ListItem>
                    <ListItem justify='between' >
                        <Anchor label='Canvas Community Repository' href='https://github.com/unsupported/canvas' primary={true} />
                    </ListItem>
                    <ListItem justify='between' >
                        <Anchor label='LDAP and SAML Auth Servers' target="_blank" href='http://auth.brianbolnick.net/discovery.php' primary={true} />
                    </ListItem>
                </List>
                <Box align='center'>
                    <Box direction='row'
                        justify='between'
                        pad={{ "between": "small" }}
                        responsive={false}>

                    </Box>
                </Box>
            </Box>

        )
    }
}

class Personal extends Component {
    render() {
        const eduHeader = (
            <Heading strong={false}
                uppercase={true}
                truncate={false}
                align='center'
                margin='small'
                style={{ color: '#6BF178' }}>
                Personal
          </Heading>
        )

        return (
            <Box align='center'
                pad='medium'
                margin='small'
                className='home-info-box'>
                <Value value={eduHeader}
                    icon={<PersonalIcon size='medium' style={{ color: '#f5f5f5' }} />}
                    label='Full Stack Engineer'
                />
                <Paragraph size='medium'>
                    I love to build things in my spare time. I always strive to learn new technologies and techniques.
                    My largest project is a web application called "Destinder" for Destiny the Game. It allows users
                    to search for other players to play with as well as view detailed statistics. It's built with a
                    Rails API backend and React frontend.
                </Paragraph>
                <div>
                    <List>
                        <ListItem justify='between' >
                            <Anchor label='Destinder (Full Rails)' href='http://destinder.com' primary={true} />
                        </ListItem>
                        <ListItem justify='between' >
                            <Anchor label='Destinder (React/Rails)' href='https://destinder-client-beta.herokuapp.com/' primary={true} />
                        </ListItem>
                        <ListItem justify='between' >
                            <Anchor label='Portfolio Website' href='https://github.com/brianbolnick/brianbolnick' primary={true} />
                        </ListItem>
                    </List>
                </div>
                <Box align='center'>

                    <Box direction='row'
                        justify='between'
                        pad={{ "between": "small" }}
                        responsive={false}>
                        <Label size='small' style={{ color: '#f5f5f5' }} >

                        </Label>
                    </Box>
                </Box>
            </Box>

        )
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
                            <img src={DestinderHome} width='100%'/>
                                <figcaption>
                                    <h3>Destinder</h3>
                                    <h4>Looking For Group and Stat Tracker for Destiny the Game</h4>
                                </figcaption>
                                <a href="https://destinder.com/"></a>
                            </figure>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="showcase-item">
                        <figure className="showcase-figure">
                            <img src={SellOutHome} width='100%'/>
                                <figcaption>
                                    <h3>SellOut</h3>
                                    <h4>Classifieds App for College Students</h4>
                                </figcaption>
                                <a href="https://young-eyrie-43253.herokuapp.com/"></a>
                            </figure>
                        </div>
                    </Grid.Column>                    
                    <Grid.Column>
                        <div className="showcase-item">
                        <figure className="showcase-figure">
                            <img src={IcpmHome} width='100%'/>
                                <figcaption>
                                    <h3>IC PM Tool</h3>
                                    <h4>Project Management Tool for Canvas IC's</h4>
                                </figcaption>
                                <a href="https://icpm.herokuapp.com/"></a>
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
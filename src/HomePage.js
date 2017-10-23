import React, { Component } from 'react';
import { Item, Container, Header, Menu, Dropdown, Icon, Table } from 'semantic-ui-react';
import { Card, Anchor, Columns, Box, Animate, Value, Label, Paragraph, Heading, Meter, Button, List, ListItem, Select } from 'grommet';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
// import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import BookIcon from 'grommet/components/icons/base/Book';
import BriefcaseIcon from 'grommet/components/icons/base/Briefcase';
import PersonalIcon from 'grommet/components/icons/base/PersonalComputer';
import LoginIcon from 'grommet/components/icons/base/Login';
import ReactIcon from 'grommet/components/icons/base/PlatformReactjs';
import RubyIcon from 'grommet/components/icons/base/Diamond';
import Parallax from 'react-springy-parallax';
import BG from './img/venice2.jpg';
import Layout from './Layout.js';
import Footer from './Footer.js';
import './Home.css';
import Brian from './img/brian.jpg';
import createReactClass from 'create-react-class';
import * as utils from './utils';

const authorizeUrl = 'https://github.com/login/oauth/authorize';
const clientId = '62c3258903ce1a2f842e';
const scope = 'user';


const OverviewSlides = (props) => {
    var Decorators = [{
        component: createReactClass({
            render() {
                return (
                    <Icon link name='angle left' inverted color='grey' size='big' onClick={this.props.previousSlide} />
                )
            }
        }),
        position: 'BottomLeft',
        style: {
            padding: 20
        }
    },
    {
        component: createReactClass({
            render() {
                return (
                    <Icon link name='angle right' inverted color='grey' size='big' onClick={this.props.nextSlide} />
                )
            }
        }),
        position: 'BottomRight',
        style: {
            padding: 20
        }
    }

    ];
    return (
        <Carousel wrapAround={true} decorators={Decorators}>
            <Professional />
            <Education />
            <Personal />
        </Carousel>
    )
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
                <Table inverted  className='hide-on-mobile' style={{ border: 'solid 1px #f9e33d', marginTop: '20px'}}>
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
                    I work at an EdTech company called <Anchor label='Instructure' style={{color: 'rgb(34, 204, 233)'}} href='https://instructure.com' target='_blank' />. 
                    In my role as an Implementation Consultant Project Manager, my main responsability is to aid Higher Ed Institutions with 
                    start-to-end technical implementations of the <Anchor label='Canvas LMS' style={{color: 'rgb(34, 204, 233)'}} href='https://canvaslms.com' target='_blank' />. 
                    You can read more about my tasks and experiences <Anchor label=' here' style={{color: 'rgb(34, 204, 233)'}} path='/professional' target='_blank' />. 
                </Paragraph>
                <List>
                    <ListItem justify='between' >
                        <Anchor className='prof-anchor' label='Migration Station' href='#' primary={true} />
                    </ListItem>
                    <ListItem justify='between' >
                        <Anchor label='Canvas Community Repository' href='#' primary={true} />
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
                    to search for other players to play with as well as view detailed statistics. It's build with a
                    Rails API backend and React frontend.
                </Paragraph>
                <div>
                    <List>
                        <ListItem justify='between' >
                            <Anchor label='Destinder (Client)' href='#' primary={true} />
                        </ListItem>
                        <ListItem justify='between' >
                            <Anchor label='Destinder (API)' href='#' primary={true} />
                        </ListItem>
                        <ListItem justify='between' >
                            <Anchor label='This Website' href='#' primary={true} />
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
            <div>
                <div className="hide-on-mobile">
                    <Animate enter={{ "animation": "fade", "duration": 2000, "delay": 1500 }} keep={true}>
                        <Columns
                            size='medium'
                            justify='center'
                            masonry={true}
                            maxCount={3}>
                            <Professional />
                            <Education />
                            <Personal />
                        </Columns>
                    </Animate>
                </div>
                <div style={{ paddingLeft: '7%' }} className='hide-on-med-and-up' >
                    <OverviewSlides />
                </div>
                <Menu fixed='bottom' secondary >

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <span style={{ paddingRight: '10px' }}>Made with </span><ReactIcon className='react-icon' /> <span style={{ paddingLeft: '10px', paddingRight: '10px' }}> and </span> <RubyIcon className='ruby-icon' /> <span style={{ paddingLeft: '10px' }}> by Brian Bolnick </span>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

class Landing extends Component {

    constructor(props) {
        super(props);

        this.state = {
            info: null
        };

    }
    componentDidMount() {
        this.fetchUserDetails();
    }

    fetchUserDetails() {
        utils.fetchUserDetails({ token: this.props.token })
            .then(info => {
                this.setState({ info })
            });
    }
    render() {
        const {
            info
          } = this.state;

        return (
            <div style={{ width: '100%' }}>
                <Columns size='large'
                    masonry={false}
                    maxCount={2}>
                    <Box align='start'
                        pad='medium'
                        margin='small'
                        className='home-intro-box'>
                        <Card thumbnail={Brian}
                            heading='Brian Bolnick'
                            description='Welcome! This site is under development.'
                            link={<Anchor href=''
                                label='' />} />
                    </Box>
                    <Box align='center'
                        pad='medium'
                        margin='small'
                        className='home-intro-box'>
                        {this.props.token}
                    </Box>
                </Columns>
                <Columns size='large'
                    masonry={false}
                    maxCount={2}>

                </Columns>
            </div>
        )
    }
}

class HomePage extends Component {
    render() {
        const styles = {
            // fontFamily: 'Menlo-Regular, Menlo, monospace',
            // fontSize: 14,
            // lineHeight: '10px',
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
                        <Menu fixed='top' secondary className="header-nav">

                            <Menu.Menu position='right'>
                                <Menu.Item>
                                    <Button
                                        label='Resume'
                                        href="#"
                                        secondary={true}
                                        accent={true}
                                        critical={false}
                                        plain={false}
                                        style={{ color: '#f5f5f5', fontSize: '1rem', fontWeight: '400' }} />
                                </Menu.Item>
                                <Dropdown item text='API Tools' >
                                    <Dropdown.Menu>
                                        <Dropdown.Header icon='configure' content='Tools and Resources' />
                                        <Dropdown.Divider />
                                        <Dropdown.Item>Destiny</Dropdown.Item>
                                        <Dropdown.Item>Twitter</Dropdown.Item>
                                        <Dropdown.Item as={Link} to='/api_tool' >Note Cards</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Menu.Item>
                                    <Button icon={<LoginIcon size='xsmall' />}
                                        label='Login'
                                        href={`${authorizeUrl}?client_id=${clientId}&scope=${scope}`}
                                        secondary={true}
                                        accent={true}
                                        critical={false}
                                        plain={false}
                                        style={{ color: '#f5f5f5', fontSize: '1rem', fontWeight: '400' }} />
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                        <Landing token={this.props.token} clickEvent={() => this.refs.parallax.scrollTo(1.2)} />
                    </Parallax.Layer>

                    <Parallax.Layer
                        offset={1.2}
                        speed={-0.1}
                    >
                        {/* <div style={{marginBottom: '4%'}} /> */}
                        <Second clickEvent={() => this.refs.parallax.scrollTo(0)} />

                    </Parallax.Layer>
                </Parallax>
            </div>

        )
    }
}

export default HomePage;
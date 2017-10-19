import React, { Component } from 'react';
import { Container, Header, Menu, Dropdown } from 'semantic-ui-react';
import { Card, Anchor, Columns, Box, Animate, Value, Label, Paragraph, Heading, Meter, Button, List, ListItem, Select } from 'grommet';

// import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import BookIcon from 'grommet/components/icons/base/Book';
import BriefcaseIcon from 'grommet/components/icons/base/Briefcase';
import PersonalIcon from 'grommet/components/icons/base/PersonalComputer';
import LoginIcon from 'grommet/components/icons/base/Login';
import Parallax from 'react-springy-parallax';
import BG from './img/venice2.jpg';
import Layout from './Layout.js';
import Footer from './Footer.js';
import './Home.css';
import Brian from './img/brian.jpg';

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
                        series={[{ "BS in IS": "BS in IS", "value": 8, "colorIndex": "graph-1" }, { "CS Minor": "CS Minor", "value": 2, "colorIndex": "graph-2" }, { "CS Minor": "CS Minor", "value": 3, "colorIndex": "graph-3" }]}
                        stacked={false}
                        size='xsmall'
                        vertical={false} />
                    <Box direction='row'
                        justify='between'
                        pad={{ "between": "small" }}
                        responsive={false}>
                        <Label size='small' style={{ color: '#f5f5f5' }} >
                            BS in Information Systems Progress<br />
                        </Label>
                    </Box>
                </Box>
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
                    Some stuff about my work
                </Paragraph>
                    <List>
                        <ListItem justify='between' >
                            <Anchor label='Migration Station' href='#' primary={true} />
                        </ListItem>                    
                        <ListItem justify='between' >
                            <Anchor label='Canvas Community Repository' href='#' primary={true} />
                        </ListItem>                    
                        <ListItem justify='between' >
                            <Anchor label='Migration Dashboard Tool' href='#' primary={true} />
                        </ListItem>                    
                    </List>
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
        )
    }
}

class Landing extends Component {

    render () {
        return (
            <div style={{ width: '100%'}}>
                <Columns size='large'
                masonry={false}
                maxCount={2}>                        
                        <Box align='start'
                        pad='medium'
                        margin='small'
                        className='home-intro-box'>
                            <Card thumbnail={Brian}
                            heading='Brian Bolnick'
                            description='This is me!'
                            link={<Anchor href=''
                            label='Sample anchor' />} /> 
                        </Box>
                        <Box align='center'
                        pad='medium'
                        margin='small'
                        className='home-intro-box'>
                            Stuff!
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

            <Parallax ref="parallax" pages={2.2}>

                <Parallax.Layer offset={0} speed={0} factor={2.3} style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPositionY: 'center' }} />

                <Parallax.Layer offset={3} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                <Parallax.Layer
                    offset={0}
                    speed={0.5}
                    style={styles}
                    >
                    <Menu  fixed='top' secondary>
                        

                        <Menu.Menu position='right'>
                            <Dropdown item text='Tools' >                            
                                <Dropdown.Menu>
                                <Dropdown.Header icon='configure' content='Tools and Resources' />
                                <Dropdown.Divider />
                                <Dropdown.Item>Resume</Dropdown.Item>
                                <Dropdown.Item>API Tester</Dropdown.Item>                            
                                </Dropdown.Menu>
                            </Dropdown>

                            <Menu.Item>
                            <Button icon={<LoginIcon size='xsmall'/>}
                                label='Login'
                                href='#'
                                secondary={true}
                                accent={true}
                                critical={false}
                                plain={false} 
                                style={{color: '#f5f5f5', fontSize: '1rem', fontWeight: '400' }}/>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                        <Landing clickEvent={() => this.refs.parallax.scrollTo(1.2)}/>
                    </Parallax.Layer>

                <Parallax.Layer
                    offset={1.2}
                    speed={-0.1}
                    >
                    
                    <Second clickEvent={() => this.refs.parallax.scrollTo(0)}/>

                </Parallax.Layer>
            </Parallax>

        )
    }
}

export default HomePage;
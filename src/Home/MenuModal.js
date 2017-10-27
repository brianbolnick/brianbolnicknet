import React, { Component } from 'react';
import {  Header,  Icon,  Image, Modal, Button, Card, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MenuIcon from '../img/menu-icon.png';
import '../App.css';
import './Home.css';

const hostname = window && window.location && window.location.hostname;
let clientId;
if (hostname === 'localhost') {
    clientId = '62c3258903ce1a2f842e';
} else {
    clientId = '0b5da5f8b2811097ff79';
}

const authorizeUrl = 'https://github.com/login/oauth/authorize';
const scope = 'user';
const jwt = JSON.parse(localStorage.getItem('jwt'));

class LoginButtons extends Component {
    isLoggedIn() {

        if ((jwt != null) && ((jwt.exp * 1000) >= Date.now())) {
            return true;
        }
        return false;
    }

    render() {
        return (
                this.isLoggedIn()
                    ?
                    <div style={{textAlign: 'center'}}>
                        <Header as='h4' style={{color: '#f5f5f5' }}>
                            Welcome, {jwt.name}!
                            <Header.Subheader style={{color: '#f5f5f5' }}>
                            Thanks for logging in! Don't worry, I don't have any info on you other than your name.
                            </Header.Subheader>
                        </Header>
                        <Button.Group>
                            <Button basic inverted color='red'><Icon name='github' />Logout</Button>
                        </Button.Group>
                    </div>
                    :
                    <div style={{textAlign: 'center'}}>
                    <Header as='h4' style={{color: '#f5f5f5' }}>
                        Sign In
                        <Header.Subheader style={{color: '#f5f5f5' }}>
                        This is just a demonstration of using JWTs and oAuth.
                        </Header.Subheader>
                    </Header>
                    <Button.Group>
                        <Button as='a' href={`${authorizeUrl}?client_id=${clientId}&scope=${scope}`} basic inverted color='blue'><Icon name='github' />Github</Button>
                        <Button.Or />
                        <Button basic inverted color='green'><Icon name='key' />Bungie</Button>
                    </Button.Group>
                </div>

        )
    }
}


class Cards extends Component {
    render() {
        return (
            <Card.Group itemsPerRow={3} className="hide-on-mobile">
                {/* <LoginCard /> */}
                <Card
                    as={Link}
                    to='/resume'
                    raised
                    header='Resume'
                    meta='Document'
                    description='View and download my current resume.'
                    style={{border: 'solid 3px #8789C0'}}
                />
                <Card
                    as={Link}
                    to='/notecards'
                    raised
                    header='Notecards Tool'
                    meta='Internal API Tool'
                    description='Leave a note! See how I integrated with a Rails API backend.'
                    style={{border: 'solid 3px #F8E14E'}}
                />
                <Card
                    as={Link}
                    to='/destiny'
                    raised
                    header='Destiny The Game'
                    meta='External API Tool'
                    description='Check low-level statistics for a Destiny player. This is an example of an integration with an external API.'
                    style={{border: 'solid 3px #22CCE9'}}
                />
                <Card
                    as={Link}
                    to='/personal'
                    raised
                    header='Personal'
                    meta='Bio'
                    description='Read more about my personal life and hobbys.'
                    style={{border: 'solid 3px #71EF7D'}}
                />
                <Card
                    as={Link}
                    to='/professional'
                    raised
                    header='Work Experience'
                    meta='Bio'
                    description="Read more about my professional experience and some of the things I've done."
                    style={{border: 'solid 3px #F37335'}}
                />
                <Card
                    as={Link}
                    to='/education'
                    raised
                    header='Education'
                    meta='Bio'
                    description='Read more about my education and some important highlights.'
                    style={{border: 'solid 3px #212121'}}
                />
            </Card.Group>
        )
    }
}

class MobileCards extends Component {
    render() {
        return (
            <Card.Group itemsPerRow={3} className="hide-on-med-and-up">
                {/* <LoginCard /> */}
                <Card
                    as={Link}
                    to='/resume'
                    raised
                    header='Resume'                    
                    style={{border: 'solid 3px #8789C0'}}
                />
                <Card
                    as={Link}
                    to='/notecards'
                    raised
                    header='Notecards Tool'                  
                    style={{border: 'solid 3px #F8E14E'}}
                />
                <Card
                    as={Link}
                    to='/destiny'
                    raised
                    header='Destiny The Game'                
                    style={{border: 'solid 3px #22CCE9'}}
                />
                <Card
                    as={Link}
                    to='/personal'
                    raised
                    header='Personal'                   
                    style={{border: 'solid 3px #71EF7D'}}
                />
                <Card
                    as={Link}
                    to='/professional'
                    raised
                    header='Work Experience'                   
                    style={{border: 'solid 3px #F37335'}}
                />
                <Card
                    as={Link}
                    to='/education'
                    raised
                    header='Education'                   
                    style={{border: 'solid 3px #212121'}}
                />
            </Card.Group>
        )
    }
}

class ModalMenu extends Component {
    render() {
        return (
            <Modal dimmer='blurring' basic trigger={<Image src={MenuIcon} className='menu-button' size='mini' as='a' href="#" />} closeIcon>
                <Modal.Header style={{ textAlign: 'center' }}>                    
                    MENU
                    {/* <Icon name='align left' /> */}
                </Modal.Header>
                <Modal.Content>
                    <Cards className="hide-on-mobile"/>
                    <MobileCards className="hide-on-med-and-up" />
                    <Divider />
                    <LoginButtons/>
                </Modal.Content>
            </Modal>
        )
    }
}


export default ModalMenu;
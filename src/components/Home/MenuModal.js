import React, { Component } from 'react';
import { Header, Icon, Image, Modal, Button, Card, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MenuIcon from '../../img/menu-icon.png';
import '../../css/App.css';
import '../../css/Home.css';
import { API_ROOT } from '../../api-config';

const hostname = window && window.location && window.location.hostname;
let githubClientId;
if (hostname === 'localhost') {
    githubClientId = '62c3258903ce1a2f842e';
} else {
    githubClientId = '0b5da5f8b2811097ff79';
}

const githubAuthorizeUrl = 'https://github.com/login/oauth/authorize';
const githubScope = 'user';
const jwt = JSON.parse(localStorage.getItem('jwt'));

let name;
if (jwt != null) {
    name = jwt.name == null ? jwt.display_name : jwt.name;
}


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
                <div style={{ textAlign: 'center' }}>
                    <Header as='h4' style={{ color: '#f5f5f5' }}>
                        Welcome, {name}!
                            <Header.Subheader style={{ color: '#f5f5f5' }}>
                            Thanks for logging in! Don't worry, I don't have any info on you other than your name.
                            </Header.Subheader>
                    </Header>
                    <Button.Group>
                        <Button basic inverted color='red'><Icon name='github' />Logout</Button>
                    </Button.Group>
                </div>
                :
                <div style={{ textAlign: 'center' }}>
                    <Header as='h4' style={{ color: '#f5f5f5' }}>
                        Sign In
                        <Header.Subheader style={{ color: '#f5f5f5' }}>
                            This is just a demonstration of using JWTs and oAuth.
                        </Header.Subheader>
                    </Header>
                    <Button.Group>
                        <Button as='a' href={`${githubAuthorizeUrl}?client_id=${githubClientId}&scope=${githubScope}`} basic inverted color='blue'><Icon name='github' />Github</Button>
                        <Button.Or />
                        {/* <Button as='a' href={`${bungieAuthorizeUrl}?client_id=${bungieClientId}&response_type=code&state=8fj30dajadj`}  basic inverted color='green'><Icon name='key' />Bungie</Button> */}
                        <Button as='a' href={`${API_ROOT}/login`} basic inverted color='green'><Icon name='key' />Bungie</Button>
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
                    to='/notecards'
                    raised
                    header='Notecards Tool'
                    meta='Internal API Tool'
                    description='Leave a note! See how I integrated with a Rails API backend.'
                    style={{ border: 'solid 3px #F8E14E' }}
                />
                <Card
                    as={Link}
                    to='/resume'
                    raised
                    header='Resume'
                    meta='Document'
                    description='View and download my current resume.'
                    style={{ border: 'solid 3px #8789C0' }}
                />
                <Card
                    as={Link}
                    to='/about'
                    raised
                    header='About Me'
                    meta='Biograpgy'
                    description='Learn more about my life and what made me.'
                    style={{ border: 'solid 3px #22CCE9' }}
                />
                <Card
                    as={Link}
                    to='/destinder'
                    raised
                    header='Destinder'
                    meta='LFG and Stat Tracker'
                    description='React/Rails Application for Destiny the Game'
                    style={{ border: 'solid 3px #71EF7D' }}
                />
                <Card
                    as={Link}
                    to='/sellout'
                    raised
                    header='SellOut'
                    meta='Classifieds for College Students'
                    description="A PHP application made for selling items."
                    style={{ border: 'solid 3px #F37335' }}
                />
                <Card
                    as={Link}
                    to='/icpm'
                    raised
                    header='ICPM'
                    meta='Project Management For PMs'
                    description='A React/Node.js application for Canvas Implementation PMs.'
                    style={{ border: 'solid 3px #212121' }}
                />
            </Card.Group>
        )
    }
}

class MobileCards extends Component {
    render() {
        return (
            <Card.Group itemsPerRow={3} className="hide-on-med-and-up">
                <Card
                    as={Link}
                    to='/notecards'
                    raised
                    header='Notecards'
                    style={{ border: 'solid 3px #F8E14E' }}
                />
                <Card
                    as={Link}
                    to='/resume'
                    raised
                    header='Resume'
                    style={{ border: 'solid 3px #8789C0' }}
                />
                <Card
                    as={Link}
                    to='/about'
                    raised
                    header='About Me'
                    style={{ border: 'solid 3px #22CCE9' }}
                />
                <Card
                    as={Link}
                    to='/destinder'
                    raised
                    header='Destinder'
                    style={{ border: 'solid 3px #71EF7D' }}
                />
                <Card
                    as={Link}
                    to='/sellout'
                    raised
                    header='SellOut'
                    style={{ border: 'solid 3px #F37335' }}
                />
                <Card
                    as={Link}
                    to='/icpm'
                    raised
                    header='ICPM'
                    style={{ border: 'solid 3px #212121' }}
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
                    WHERE TO?
                </Modal.Header>
                <Modal.Content>
                    <Cards className="hide-on-mobile" />
                    <MobileCards className="hide-on-med-and-up" />
                    <Divider />
                    <LoginButtons />
                </Modal.Content>
            </Modal>
        )
    }
}


export default ModalMenu;
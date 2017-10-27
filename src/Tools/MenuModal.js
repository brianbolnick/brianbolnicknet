import React, { Component } from 'react';
import {  Icon,  Image, Modal, Button, Card, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MenuIcon from '../img/menu-icon.png';
import '../App.css';
import './Tools.css';

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
                </Modal.Header>
                <Modal.Content>
                    <Cards className="hide-on-mobile"/>
                    <MobileCards className="hide-on-med-and-up" />
                    <Divider />
                    <div style={{textAlign: 'center'}}>
                        <Button as={Link} to='/' basic inverted color='teal' size='big'><Icon name='home' />Home</Button>
                    </div>
                </Modal.Content>
            </Modal>
        )
    }
}


export default ModalMenu;
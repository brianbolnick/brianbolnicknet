import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import Photo from '../../img/me-clip.png'
import ICPM from './ICPM'
import Destinder from './Destinder'
import Canvas from './Canvas'
import Layout from '../Layout'
import ReactDOM from 'react-dom';
import Gilagoat from './Gilagoat';
import Sellout from './Sellout';
import Europe from './Europe';

const TopContent = () => {
    return (
        <div className="home-top-container">
            <div className="top-content">
                <div className="top-title">Hello!</div>
                <div className="top-desc">
                    I'm a Software Engineer and Designer focused on web development. Majoring in Information Systems at the University of Utah.
                </div>
                <div className="top-desc">
                    Currently Software Engineer at <a href="https://lds.org" className="inline-link" target="_blank" rel="noopener noreferrer">The Church of Jesus Christ of Latter-Day Saints</a>.
                Previously at <a href="https://instructure.com" className="inline-link" target="_blank" rel="noopener noreferrer">Instructure. </a>
                </div>
            </div>
            <div className="top-image">
                <img src={Photo} alt="" className="self-image" />
            </div>
        </div>
    )
}


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.scrollToFirst = this.scrollToFirst.bind(this);
    }

    scrollToFirst(event) {
        const testNode = ReactDOM.findDOMNode(this.refs.first)
        window.scrollTo({ "behavior": "smooth", "top": testNode.offsetTop, "left": "0" })
    }

    render() {
        return (
            <Layout>
                <TopContent />
                <div className="scroll-container">
                    <Icon name='angle down' size='huge' id="scroll-icon" onClick={this.scrollToFirst} />
                </div>
                <div className="main-content" id="main-content" ref="first">
                    <Europe />
                    <ICPM />
                    <Destinder />
                    <Sellout />
                    <Gilagoat />
                    <Canvas />
                </div>
            </Layout>
        )
    }
}

export default HomePage;
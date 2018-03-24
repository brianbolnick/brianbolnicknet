import React, { Component } from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';
import ReactDOM from 'react-dom';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navClass: ''
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToFirst = this.scrollToFirst.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    scrollToFirst(event) {
        const tesNode = ReactDOM.findDOMNode(this.refs.first)
        window.scrollTo(0, tesNode.offsetTop);
    }

    handleScroll(event) {
        const navHeight = 20;
        var refOffset = 0;
        const newOffset = window.scrollY || window.pageYOffset;

        if (newOffset > navHeight) {
            if (newOffset > refOffset) {
                //transition out 
                this.setState({ navClass: 'nav2' })
            } else {
                this.setState({ navClass: '' })
            }
            refOffset = newOffset;
        } else {
            //transition back in
            this.setState({ navClass: '' })
        }
    };
    render() {
        return (
            <div style={{ minHeight: '100vh' }}>
                <Nav navClass={this.state.navClass} />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout

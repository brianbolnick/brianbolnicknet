import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div className={`new-nav hide-on-mobile ${this.props.navClass}`}>
                <div className="brand">Brian Bolnick</div>
                <div className="nav-links">
                    <Link to='/' className='new-nav-item'>
                        Projects
                    </Link>
                    <a href='https://s3-us-west-2.amazonaws.com/brianbolnicknet/resume.pdf' className='new-nav-item' target='_blank' rel="noopener noreferrer">
                        Resume
                    </a>
                    <a href='mailto:brianbolnick+web@gmail.com' className='new-nav-item'>
                        Contact
                    </a>
                </div>
            </div>
        )
    }
}
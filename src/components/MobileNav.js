import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MobileNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLinks: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({showLinks: !this.state.showLinks})
    }
    render() {
        return (
            <div className={`new-nav-mobile hide-on-med-and-up ${this.props.navClass}`}>
                <div className="brand">Brian Bolnick</div>
                <Icon name="bars" size="large" style={{ color: "#414141" }} link onClick={this.handleClick} />                
                {this.state.showLinks ?
                    <div className="nav-links mobile-nav">
                        <Link to='/' className='new-nav-item-mobile'>
                            Projects
                    </Link>
                        <a href='https://s3-us-west-2.amazonaws.com/brianbolnicknet/resume.pdf' className='new-nav-item-mobile' target='_blank' rel="noopener noreferrer">
                            Resume
                    </a>
                        <a href='mailto:brianbolnick+web@gmail.com' className='new-nav-item-mobile'>
                            Contact
                    </a>
                    </div>
                    :
                    null
                }

            </div>
        )
    }
}
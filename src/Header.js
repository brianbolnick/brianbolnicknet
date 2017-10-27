import React, { Component } from 'react';
import { Menu,  Icon } from 'semantic-ui-react';
import './Home.css';
import MenuModal from './MenuModal';


class HeaderContent extends Component {
    render() {
        return (
            <Menu fixed='top' secondary className="header-nav">

                <Menu.Menu position='left'>
                    <Menu.Item>
                        <MenuModal />
                    </Menu.Item>
                </Menu.Menu>

                <Menu
                    position='right'
                    icon
                    borderless
                    compact
                    style={{ backgroundColor: 'transparent', marginRight: '10px' }}
                >

                    <Menu.Item
                        href="//twitter.com/brianbolnick"
                        target="_blank"
                        name="twitter"
                    >
                        <Icon
                            name="twitter square"
                            size="large"
                            style={{ color: "#F5F5F5" }}
                        />
                    </Menu.Item>

                    <Menu.Item
                        href="//github.com/brianbolnick"
                        target="_blank"
                        name="github"
                    >
                        <Icon name="github" size="large" style={{ color: "#F5F5F5" }} />
                    </Menu.Item>

                    <Menu.Item
                        href="//linkedin.com/brianbolnick"
                        target="_blank"
                        name="linkedin"
                    >
                        <Icon name="linkedin" size="large" style={{ color: "#F5F5F5" }} />
                    </Menu.Item>
                </Menu>
            </Menu>
        )
    }
}

export default HeaderContent;



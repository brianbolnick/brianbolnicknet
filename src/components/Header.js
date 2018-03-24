import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import '../../css/Home.css';
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
                    style={{ backgroundColor: 'transparent', marginRight: '10px', border: 'none', boxShadow: 'none' }}
                >

                    <Menu.Item
                        href="//dribbble.com/brianbolnick"
                        target="_blank"
                        name="dribble"
                    >
                        <Icon name="dribble" size="large" style={{ color: "#F5F5F5" }} />
                    </Menu.Item>

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
                        href="//linkedin.com/in/brianbolnick/"
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



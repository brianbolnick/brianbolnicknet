import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import '../../css/Bio.css';
import MenuModal from '../Home/MenuModal';


class HeaderContent extends Component {
    render() {
        return (
            <Menu fixed='top' secondary className="bio-nav" style={{ backgroundColor: '#212121' }}>

                <Menu.Menu position='left'>
                    <Menu.Item>
                        <MenuModal />
                    </Menu.Item>
                </Menu.Menu>            
            </Menu>
        )
    }
}

export default HeaderContent;



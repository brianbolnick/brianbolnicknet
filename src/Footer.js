import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import './Home.css';
import ReactIcon from 'grommet/components/icons/base/PlatformReactjs';
import RubyIcon from 'grommet/components/icons/base/Diamond';
import { Anchor } from 'grommet';



class FooterContent extends Component {
  render() {
    return (
      <Menu fixed='bottom' secondary >
        <Menu.Menu position='left'>
          <Menu.Item>
            <Icon name='mail' />
            <Anchor className='prof-anchor' style={{color: '#f5f5f5' }} label='Contact' href='mailto:brianbolnick+web@gmail.com' primary={false} />
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item>
            <span style={{ paddingRight: '10px' }}>Made with </span><ReactIcon className='react-icon' /> <span style={{ paddingLeft: '10px', paddingRight: '10px' }}> and </span> <RubyIcon className='ruby-icon' /> <span style={{ paddingLeft: '10px' }}> by Brian Bolnick </span>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}



export default FooterContent


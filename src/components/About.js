import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react';

class About extends Component {
    render() {
        return (

            <div style={{ textAlign: 'center', minHeight: '100%' }}>
                <div className='showcase-heading'>ABOUT ME </div>
                <div className='single-showcase-container'>
                    <Divider hidden style={{ marginBottom: '30px' }} />
                    I'll have some info here coming soon!
                    </div>
            </div>
        )
    }
}

export default About;
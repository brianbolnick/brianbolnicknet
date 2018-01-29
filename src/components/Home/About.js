import React, { Component } from 'react'
import Layout from '../Showcase/Layout'
import { Image, Modal, Divider, Grid } from 'semantic-ui-react';



class About extends Component {
    render() {
        return (
            <Layout>
                <div style={{ textAlign: 'center', minHeight: '100%' }}>
                    <div className='showcase-heading'>ABOUT ME </div>
                    <div className='single-showcase-container'>
                        <Divider hidden style={{ marginBottom: '30px' }} />
                        I'll have some info here coming soon!
                    </div>
                </div>
            </Layout>
        )
    }
}

export default About;
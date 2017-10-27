import React from 'react';
import Iframe from 'react-iframe'
// import Header from './Header';
import Layout from './Layout';

class MyPdfViewer extends React.Component {
    render() {
        return (
            <Layout>                
                <div style={{textAlign: 'center', marginTop: '6.5%' }}>                
                    <Iframe 
                    url="https://s3-us-west-2.amazonaws.com/brianbolnicknet/BrianJBolnick2017.pdf" 
                    display="initial"
                    position="relative"
                    allowFullScreen
                    width="100%" 
                    height="650" 
                    style={{border: 'none'}}> 
                    </Iframe>
                </div>
            </Layout>
        )
    }

}

export default MyPdfViewer;
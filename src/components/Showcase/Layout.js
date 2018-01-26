import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';


const Layout = ({ children }) => (  
    <div style={{
        background: 'linear-gradient(rgb(116, 235, 213), rgb(172, 182, 229))',
        minHeight: '100vh',
        backgroundSize: 'cover'
    }}>
        <Header />
            {children}
        <Footer />
    </div>

)

export default Layout

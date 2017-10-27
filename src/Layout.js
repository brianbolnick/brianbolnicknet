import React from 'react';
// eslint-disable-next-line
import Header from './Header.js';
// eslint-disable-next-line
import Footer from './Footer.js';


const Layout = ({ children }) => (  
    <div>
        {/* <Header /> */}
            {children}
        {/* <Footer /> */}
    </div>

)

export default Layout

import React, { Component } from 'react';
import Home from '../img/sellout-home-op.jpg'
import Layout from './Layout'
import ListingsFull from '../img/sellout-listings-op.jpg'
import SingleListing from '../img/showcase-sellout-listing.png'
import ProfileFull from '../img/sellout-profile.png'
import Login from '../img/showcase-sellout-login-form.gif'
import erd from '../img/sellout-erd.png'

class Icpm extends Component {
    render() {
        return (
            <Layout>
                <div className="showcase-top-container" id="icpm-showcase">
                    <div className="showcase-title">SellOut Classifieds</div>
                    <div className="showcase-main-img">
                        <img src={Home} alt="" />
                    </div>
                </div>
                <div className="showcase-main-content" id="showcase-main-content" ref="first">
                    <div className='single-showcase-container'>
                        <div className="divider" style={{ marginBottom: '30px' }}></div>
                        <div className="showcase-background">
                            During my undergrad at the University of Utah, I took a Web Application development class. The course
                            taught entry-level development using PHP, HTML/CSS, pure JS, and jQuery. SellOut was the application 
                            my group built as our term projet. It was designed to fill a need for classified sales specifically in 
                            the higher education market. It allows students to buy and sell anything from textbooks to open dorm/housing 
                            spots. 
                        </div>
                    </div>
                </div>

                <div className="showcase-second">
                    <div className="showcase-stack">
                        <div className="showcase-section-title">
                            Technology
                            </div>
                        <div className="tech-stack">
                            <div className="tech-headers">
                                <div className="tech-header">Front End:</div>
                                <div className="tech-header">Back End:</div>
                                <div className="tech-header">Database:</div>
                                <div className="tech-header">Authentication:</div>
                                <div className="tech-header">State Management:</div>
                            </div>
                            <div className="tech-values">
                                <div className="tech-value">jQuery</div>
                                <div className="tech-value">PHP</div>
                                <div className="tech-value">MySQL</div>
                                <div className="tech-value">Local</div>
                                <div className="tech-value">N/A</div>
                            </div>
                        </div>
                    </div>
                    <div className="architecture">
                        <div className="showcase-section-title">Database Architecture</div>
                        <img src={erd} alt="sellout-erd" id="sellout-erd" className="erd"/>
                    </div>
                </div>
                <div className="showcase-third">
                    <div className="authentication">
                        <div className="showcase-split-title">Authentication</div>
                        <div className="showcase-split-text">
                            SellOut implements local, home-grown authentication. When the user originally signs up and 
                            creates an account, the password is salted and then hashed. This encrypted value is then stored in the 
                            database. When a user initiates a login attempt, their password is passed through the same salting and
                            hashing process to compare the encrypted value with what's stored in the database. 
                            <br /><br />
                            SellOut also contains authorization and role management, which allows only certain users to access 
                            certain pages (such as their personal profile). The login page features a custom SVG animation adapted from {" "}
                            <a href="https://codepen.io/dsenneff/pen/QajVxO" className="inline-link" target="_blank" rel="noopener noreferrer">this Codepen.</a>
                        </div>
                    </div>
                    <div className="showcase-single-img">
                        <img src={Login} alt=""  className="single-img-show"/>
                    </div>
                </div>
                <div className="showcase-fourth">
                    <div className="feature-left">
                        <div className="showcase-split-text">
                            The listings page begins with a <code>SELECT</code> SQL statement to retrieve all listings from the database. 
                            Each object is then displayed in a flexbox grid. 
                            <br/><br/>
                            This page also includes search and filter by category features 
                            as well, which retrieves results similar to the query. This page is accessible to all users, authenticated or not.
                        </div>
                        <div className="showcase-split-title">View Listings</div>
                    </div>
                    <div className="showcase-single-img">
                        <img src={ListingsFull} alt="" className='single-img' />
                    </div>
                </div>
                <div className="showcase-fifth">
                    <div className="feature-right">
                        <div className="showcase-split-title">Listing View</div>
                        <div className="showcase-split-text">
                            The listing view is a simple and clean display of all pertinent details of the classified ad. 
                            It displays the image (which is uploaded to an S3 bucket on AWS), the title, pricing information, 
                            location of the post, and additional descriptive info. 
                            <br/><br/>
                            This also provides an option to contact the seller of the listing, which generates an email form 
                            that is sent to the original poster of the advertisement. Lastly, there is also a link which allows
                            you to see other postings from the specific user.
                        </div>
                    </div>
                    <div className="showcase-double-img">
                        <img src={SingleListing} alt="" className="double-img-show"/>
                        <img src={SingleListing} alt="" className="double-img-show"/>
                    </div>
                </div>
                <div className="showcase-sixth">
                    <div className="feature-left">
                        <div className="showcase-split-text">
                            Every user has a personal profile page available upon login. This page incorporates multiple 
                            features. All active listings by the user are displayed, each with a link to view the ad as well
                            as the ability to edit or delete the listing.
                            <br/><br/>
                            In addition, the user also has the ability to edit their own profile information (including passwords)
                             as well as create a new listing. This page is also the "View User" page when viewing all listings by a
                             certain user. Role authorization determines what features and options are available to the profile and 
                             individual listings.  
                        </div>
                        <div className="showcase-split-title">Profile</div>
                    </div>
                    <div className="showcase-single-img">
                        <img src={ProfileFull} alt="" className="single-img"/>
                    </div>
                    <div className="visit-link">
                        <a href="https://selloutapp.herokuapp.com" className="showcase-link-dark">VISIT THE SITE</a>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Icpm;
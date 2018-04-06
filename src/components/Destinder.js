import React, { Component } from 'react';
import Layout from './Layout'
import Login from '../img/showcase-destinder-login.png'
import Lfg from '../img/destinder-lfg.png';
import Profile from '../img/showcase-destinder-profile-op.jpg'
import Profile2 from '../img/showcase-destinder-profile2.png'
import HomeFull from '../img/destinder-home-op.png'
import Ft1Full from '../img/destinder-ft-1-op.jpg'
import Ft2Full from '../img/destinder-ft-2.png'
import erd from '../img/destinder-erd.png'

class Destinder extends Component {
    render() {
        return (
            <Layout>
                <div className="showcase-top-container" id="icpm-showcase">
                    <div className="showcase-title">Destinder LFG</div>
                    <div className="showcase-main-img">
                        <img src={HomeFull} alt="" />
                    </div>
                </div>
                <div className="showcase-main-content" id="showcase-main-content" ref="first">
                    <div className='single-showcase-container'>
                        <div className="divider" style={{ marginBottom: '30px' }}></div>
                        <div className="showcase-background">
                            I've always loved playing video games. One of my favorites is {' '}
                            <a href="https://destinythegame.com" className="inline-link" target="_blank" rel="noopener noreferrer">Destiny the Game</a>
                            {' '} It's an open-world role-playing, first-person-shooter that's played solely online. This means you are able to play any game
                            mode with friends or other players. There are some very competitive game modes, some of which require a team with
                            specific skill levels in order to complete. There are a few sites out there to help players "Look for a group" (LFG)
                            in order to play and complete these modes. However, each site only allows generic information that doesn't describe
                            who the player is or what their skill-level is. Many of them also had unfriendly interfaces that were clunky and unintuitive.
                            <br /><br />
                            There are also several sites whose purpose is to provide stat tracking and milestone completion progress.
                            Often, players looking for a team will use one site to find players, and possibly multiple others to validate
                            stats and skill levels, making the process much more complicated than it should be. Destinder was brought to life
                            to provide a simple solution to these issues.
                            <br /><br />
                            Destinder is the all-in-one Destiny tool belt. It includes all the important features in a single place,
                            designed with a simple and user-friendly interface. Users are able to find players with more custom filters,
                            track both their own and their opponents stats, and manage in-game content such as items and character customizations.
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
                                <div className="tech-value">React.js</div>
                                <div className="tech-value">Ruby on Rails</div>
                                <div className="tech-value">PostgreSQL</div>
                                <div className="tech-value">oAuth (Bungie) + JWT</div>
                                <div className="tech-value">Redux</div>
                            </div>
                        </div>
                    </div>
                    <div className="architecture">
                        <div className="showcase-section-title">Database Architecture</div>
                        <img src={erd} alt="icpm-erd" className="erd" />
                    </div>
                </div>
                <div className="showcase-third">
                    <div className="authentication">
                        <div className="showcase-split-title">Authentication</div>
                        <div className="showcase-split-text">
                            Destinder utilizes Bungie's oAuth strategy to authenticate. The authentication is handled
                            by the server API (Ruby on Rails), which then generates a JWT to authenticate requests between
                            the client and the server. oAuth allows the application to work more seemlessly with Bungie's API
                            as we are able to use individual API access tokens for each user's request, which greatly helps
                            avoid throttling and rate limiting restrictions imposed by Bungie.
                            <br /><br />
                            Authentication posed a unique problem, as Destiny can be played on 3 separate platforms (Xbox, PS4, and PC) -
                             each of which contains separate user and character identifiers. I had to build the site to allow users who play
                             on multiple platforms to select which one they would like to login with for that specific session. This is a unique
                             feature which I have still yet to see with other third-party applications for the game. This feature allows the player
                             to track game progress and find teams on each individual platform rather than being forced to use a single one.
                        </div>
                    </div>
                    <div className="showcase-single-img">
                        <img src={Login} alt="" className="single-img-show" />
                    </div>
                </div>
                <div className="showcase-fourth">
                    <div className="feature-left">
                        <div className="showcase-split-text">
                            LFG is the main component of Destinder. It allows users to search for other people to play with, which
                            helps them complete in-game missions and content. Other sites made it difficult to know exactly <em>who</em>
                            you are looking at when reading a posting as far as skill level goes. Destinder's LFG system embeds the player's
                            stats and information directly in the post listing itself. This allows users to see exactly what your play style and
                            skill level are at an instant glance, eliminating the need to bounce between sites to find the perfect team. I've
                            also added more specific filtering options, like finding a player by a certain Kill/Death ratio or overall ranking.
                            Posts are also auto-filtered by console so you don't have to wade through players not on the same platform as you.
                           <br /><br />
                            Another unique feature to the LFG section is the ability to tag team (fireteam) members. Many game modes in Destiny
                            require teams of 3 or more. If someone already has several people and are only looking to fill a few spots, they may
                             create a posting that tags the other members of their team. This allows other users to investigate the skill level of
                             the team as a whole while making the decision to join. LFG makes it very easy to find exactly who you are looking for,
                             skill level, player reputation, and play style in-all.
                        </div>
                        <div className="showcase-split-title">Looking for Group (LFG)</div>
                    </div>
                    <div className="showcase-single-img">
                        <img src={Lfg} alt="" className='single-img' />
                    </div>
                </div>
                <div className="showcase-fifth">
                    <div className="feature-right">
                        <div className="showcase-split-title">Profile</div>
                        <div className="showcase-split-text">
                            The profile page is available to authenticated users. It allows them to see game mode-specific
                            stats on a character by character level. Another feature currently under development is
                            the ability to manage in-game items and equipment (such as weapon loadouts, selected armor, etc.).
                            I am working on a drag-and-drop functionality that will allow players to transfer items across their
                            characters as well as create custom pre-defined loadouts that are easily equippable.
                            <br /><br />
                            Each player also has the ability to earn site-wide badges. This are earned through various interactions
                            and participations with the site (referring a certain amount of people, donating, joining at a certain time,
                            etc.). Users are also able to vote for or against other users regarding their play behavior and experience.
                            This allows other users to see that player's reputation. This is also displayed at the profile level.
                        </div>
                    </div>
                    <div className="showcase-double-img">
                        <img src={Profile} alt="" className="double-img-show" />
                        <img src={Profile2} alt="" className="double-img-show" />
                    </div>
                </div>
                <div className="showcase-sixth">
                    <div className="feature-left">
                        <div className="showcase-split-text">
                            One very popular game mode in Destiny is Trials of the Nine. This is a competitive game mode that requires
                            teams to have high skill in order to compete and beat other players and teams. The goal is to win 9 matches in a row.
                            Each match is a 4 v 4 player-vs-player deathmatch elimination. It's very helpful to know the team you are playing against
                            in each match in order to strategize and prepare for the game. Fireteams allows you to search for any player on the 
                            opposing team and displays all relevant information for that player's current (or most recent) fireteam. This includes
                            each player's kill/death ratios, rankings, weapon loadout, and more. 
                            <br/><br/>
                            You are also able to view stats for each one of every player's characters in a specific break down. This allows the 
                            users to view a full analysis of the opposing team's play style. You are able to view past game histories, player reputations,
                            and more.
                        </div>
                        <div className="showcase-split-title">Fireteams</div>
                    </div>
                    <div className="showcase-double-img">
                        <img src={Ft1Full} alt="" style={{ margin: '10px' }} className="double-img" />
                        <img src={Ft2Full} alt="" style={{ margin: '10px' }} className="double-img" />
                    </div>
                    <div className="visit-link">
                        <a href="https://destinder.com" className="showcase-link-dark">VISIT THE SITE</a>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Destinder;
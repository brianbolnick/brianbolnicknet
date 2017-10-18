import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { Card, Anchor, Columns, Box, Animate, Meter, Value, Label, Paragraph} from 'grommet';
import BookIcon from 'grommet/components/icons/base/Book';
import Parallax from 'react-springy-parallax';
import BG from './img/venice2.jpg';
import Layout from './Layout.js';
import Footer from './Footer.js';
import './Home.css';

class Landing extends Component {
    render() {
        return (
            <div>
                <Animate enter={{"animation": "fade", "duration": 2000, "delay": 1500}} keep={true}>
                    <Columns                    
                        size='Large'
                        justify='center'
                        masonry={true}
                        maxCount={3}>
                        <Box align='center'
                            pad='medium'
                            margin='small'
                            className='home-info-box'>
                            <Value value={'EDUCATION'}
                                icon={<BookIcon size='small' style={{color: '#f5f5f5' }} />}
                                label='University of Utah'
                            />
                            <Paragraph size='medium'>
                                Raised on hip-hop and foster care, defiant city kid Ricky
                                gets a fresh start in the New Zealand countryside. He quickly finds himself
                                at home with his new foster family: the loving Aunt Bella, the cantankerous
                                Uncle Hec, and dog Tupac. When a tragedy strikes that threatens to ship
                                Ricky to another home, both he and Hec go on the run in the bush. As a
                                national manhunt ensues, the newly branded outlaws must face their
                                options: go out in a blaze of glory or overcome their differences and
                                survive as a family.
                            </Paragraph>
                            <Box align='center'>
                            <Meter type='circle'
                              series={[{"label": "Gen 7", "value": 8, "colorIndex": "graph-1"}, {"label": "Gen 8", "value": 2,  "colorIndex": "graph-2"}]}
                              />
                            <Box direction='row'
                              justify='between'
                              pad={{"between": "small"}}
                              responsive={false}>
                              <Label size='small'>
                                BS in Information Systems <br />
                              </Label>                              
                            
                            </Box>
                          </Box>
                        </Box>
                        <Box align='center'
                            pad='medium'
                            margin='small'
                            className='home-info-box'>
                            Personal
                        </Box>
                        <Box align='center'
                            pad='medium'
                            margin='small'
                            className='home-info-box'>
                            Professional
                        </Box>
                    </Columns>
                </Animate>
         </div>       
        )
    }
}

class HomePage extends Component {
    render() {
        const styles = {
            // fontFamily: 'Menlo-Regular, Menlo, monospace',
            // fontSize: 14,
            // lineHeight: '10px',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
        return (

                <Parallax ref="parallax" pages={2}>

                    <Parallax.Layer offset={0} speed={0} factor={2} style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPositionY: 'center' }} />

                    <Parallax.Layer offset={3} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                    <Parallax.Layer
                        offset={0}
                        speed={0.5}
                        onClick={() => this.refs.parallax.scrollTo(1)}>
                        <Landing />
                    </Parallax.Layer>

                    <Parallax.Layer
                        offset={1}
                        speed={-0.1}
                        style={styles}
                        onClick={() => this.refs.parallax.scrollTo(0)}>
                        Another page ...
                        
                    </Parallax.Layer>
                </Parallax>

        )
    }
}

export default HomePage;
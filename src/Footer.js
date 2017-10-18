import React from 'react';
import Header from './Header.js';

import {Footer, Title, Box, Paragraph, Menu, Anchor } from 'grommet';


const FooterContent = ({ children }) => (  
    <Footer justify='between'
  size='small'>
  <Title>
    <s />
     Title
  </Title>
  <Box direction='row'
    align='center'
    pad={{"between": "medium"}}>
    <Paragraph margin='none'>
      © 2016 Grommet Labs
    </Paragraph>
    <Menu direction='row'
      size='small'
      dropAlign={{"right": "right"}}>
      <Anchor href='#'>
        Support
      </Anchor>
      <Anchor href='#'>
        Contact
      </Anchor>
      <Anchor href='#'>
        About
      </Anchor>
    </Menu>
  </Box>
</Footer>

)

export default FooterContent


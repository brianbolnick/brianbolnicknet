import React from 'react';
import { Header, Title, Box, Paragraph, Menu, Anchor, Actions } from 'grommet';


const HeaderContent = ({ children }) => (
    <Header float={false}
        fixed={true}
        size='small'
    >
        <Title>
            Sample Title
        </Title>
        <Box flex={true}
            justify='end'
            direction='row'
            responsive={true}>
            {/* <Menu icon={<Actions />}
                dropAlign={{ "right": "right" }}>
                <Anchor href='#'
                    className='active'>
                    First
                </Anchor>
                <Anchor href='#'>
                    Second
                 </Anchor>
                <Anchor href='#'>
                    Third
                </Anchor>
            </Menu> */}
        </Box>
    </Header>

)

export default HeaderContent;



import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';


class NotFound extends Component {
    render() {
        return (
            <div className="profile-page">
                <Container>
                    <Header as='h2'>Sorry!</Header>
                    <p>The page you're looking for doesn't exist.</p>
                </Container>
            </div>
        );
    }
}
  
export default NotFound;
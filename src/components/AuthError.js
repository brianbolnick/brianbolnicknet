import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';


class AuthError extends Component {
    render() {
        return (
            <div className="profile-page">
                <Container>
                    <Header as='h2'>Sorry!</Header>
                    <p>There was an issue logging you in.</p>
                </Container>
            </div>
        );
    }
}
  
export default AuthError;
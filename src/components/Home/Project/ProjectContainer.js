import React, { Component } from 'react'

export default class ProjectContainer extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="project-container">
                {children}
            </div>
        )
    }
}
import React from 'react';
import ProjectDates from './ProjectDates';
import ProjectTitle from './ProjectTitle';
import ProjectDescription from './ProjectDescription';

export default ({ children, title, description, dates }) => (
    <div className="project-details">
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectDates>{dates}</ProjectDates>
    </div>
)
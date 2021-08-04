import React from "react";
import ProjectSummary from "./ProjectSummary";
import { link } from 'react-router-dom'

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            { projects && projects.map(project => {
                return (
                    <link to={'/project' + project.id}>
                       <ProjectSummary project={project} key={project.id} />
                    </link>
                )
            })}
        </div> 
    )
}

export default ProjectList;
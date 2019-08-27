import * as React from "react";

import Project from "../../molecules/Project";
import ProjectFilter from "../../molecules/ProjectFilter";

import { ProjectTypes } from "../../../enums";

import { TabsContext } from "../../../context/ProjectTabs";

import projects from "./projects";

import "./style.scss";

function renderProjects(selected: string) {
    const filteredProjects = projects
        .filter((project) => (
            selected === ProjectTypes.ALL || project.type === selected
        ));

    if (filteredProjects.length === 0) {
            return (
                <p>No projects at the time. Stay tuned!</p>
            );
        }
    return filteredProjects.map((project, i) => (
        <li key={i}>
            <Project
                name={project.name}
                type={project.type}
                image={project.image}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
            />
        </li>
    ));
}

function ProjectDisplay() {
    const { selected } = React.useContext(TabsContext);
    return (
        <div className="project-display">
            <h2>Projects</h2>
            <ProjectFilter />
            <ul className="content">
                {renderProjects(selected)}
            </ul>
        </div>
    );
}

export default ProjectDisplay;

import * as React from "react";

import * as path from "path";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { paramCase } from "change-case";

import { ProjectTypes } from "../../../enums";

import "./style.scss";

interface IProjectProps {
    name: string;
    type: ProjectTypes;
    image: string;
    githubLink?: string;
    demoLink?: string;
}
const Project = ({
    name,
    type,
    image,
    githubLink,
    demoLink,
}: IProjectProps) => (
    <div className={`project ${paramCase(type)}`}>
        <img
            src={image}
            alt={name}
        />
        <h3>{name}</h3>
        <div className="links">
            {githubLink ? <a href={githubLink}><FontAwesomeIcon icon={faGithub} /></a> : null}
            {demoLink ? <a href={demoLink}><FontAwesomeIcon icon={faTv} /></a> : null}
        </div>
    </div>
);

export default Project;

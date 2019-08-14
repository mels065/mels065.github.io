import * as React from "react";

import Tab from "../../atoms/Tab";

import { TabsContext } from "../../../context/ProjectTabs";

import { ProjectTypes } from "../../../enums";

import "./style.scss";

function generateTabs(selected: string, changeSelected: (newSelected: ProjectTypes) => {}) {
    return Object.values(ProjectTypes).map((type) => (
        <Tab
            key={type}
            currentSelection={selected}
            onClick={changeSelected}
        >
            {type}
        </Tab>
    ));
}

function ProjectFilter() {
    const value = React.useContext(TabsContext);
    return (
        <div className="project-filter">
            {generateTabs(value.selected, value.changeSelected)}
        </div>
    );
};

export default ProjectFilter;

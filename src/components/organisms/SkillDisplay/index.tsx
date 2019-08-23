import * as React from "react";

import skills from "./skills";

import Skill from "../../molecules/Skill";

import "./style.scss";

function renderSkills() {
    return skills.map((skill, i) => (
        <Skill
            key={i}
            name={skill.name}
            icon={skill.icon}
        />
    ));
}

const SkillDisplay = () => (
    <div className="skill-display">
        <h3>Skills</h3>
        <div className="content">
            {renderSkills()}
        </div>
    </div>
);

export default SkillDisplay;

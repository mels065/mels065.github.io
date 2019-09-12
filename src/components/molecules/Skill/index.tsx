import * as React from "react";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

interface ISkillProps {
    name: string;
    icon: IconProp;
}
const Skill = ({ name, icon }: ISkillProps) => (
    <div className="skill">
        <FontAwesomeIcon size="10x" icon={icon} color="#20437c" />
        <label>{name}</label>
    </div>
);

export default Skill;

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCss3, faHtml5, faJs, faNode, faReact, faSass } from "@fortawesome/free-brands-svg-icons";

class Skill {
    public name: string;
    public icon: IconProp;

    constructor(name: string, icon: IconProp) {
        this.name = name;
        this.icon = icon;
    }
}

export default [
    new Skill("HTML5", faHtml5),
    new Skill("CSS3", faCss3),
    new Skill("JavaScript", faJs),
    new Skill("React", faReact),
    new Skill("Sass", faSass),
    new Skill("Node.js", faNode),
];

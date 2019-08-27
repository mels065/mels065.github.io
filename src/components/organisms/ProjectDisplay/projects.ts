import { ProjectTypes } from "../../../enums";

import * as calculator from "../../../assets/images/projects/calculator.jpg";
import * as gameOfLife from "../../../assets/images/projects/game-of-life.png";
import * as pomodoroClock from "../../../assets/images/projects/pomodoro-clock.jpg";
import * as timestampMicroservice from "../../../assets/images/projects/timestamp-microservice.jpg";

console.log(calculator);

class Project {
    public name: string;
    public type: ProjectTypes;
    public image: string;
    public githubLink?: string;
    public demoLink?: string;

    constructor(
        name: string,
        type: ProjectTypes,
        image: string,
        opts: {
            githubLink?: string,
            demoLink?: string,
        } = {},
    ) {
        this.name = name;
        this.type = type;
        this.image = image;
        this.githubLink = opts.githubLink ? opts.githubLink : null;
        this.demoLink = opts.demoLink ? opts.githubLink : null;
    }
}

export default [
    new Project(
        "Calculator",
        ProjectTypes.FRONT_END,
        calculator,
        {
            demoLink: "https://mels065.github.io/react-calculator/",
            githubLink: "https://github.com/mels065/react-calculator",
        },
    ),
    new Project(
        "Game of Life",
        ProjectTypes.FRONT_END,
        gameOfLife,
        {
            demoLink: "https://gentle-gorge-91021.herokuapp.com/",
            githubLink: "https://github.com/mels065/game-of-life",
        },
    ),
    new Project(
        "Pomodoro Clock",
        ProjectTypes.FRONT_END,
        pomodoroClock,
        {
            demoLink: "https://mels065.github.io/pomodoro-clock/",
            githubLink: "https://github.com/mels065/pomodoro-clock",
        },
    ),
    new Project(
        "Timestamp Microservice",
        ProjectTypes.BACK_END,
        timestampMicroservice,
        {
            demoLink: "https://mels-timestamp-microservice.herokuapp.com/",
            githubLink: "https://github.com/mels065/timestamp-microservice",
        },
    ),
];

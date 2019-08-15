import * as React from "react";

import "./style.scss";

const specialties = [
    "Front-end",
    "Back-end",
    "Full-stack",
    "Game Development",
]
let timer;
function HeroImage() {
    const [currentActive, changeActive] = React.useState(0);

    setTimeout(() => {
        changeActive((currentActive + 1) % specialties.length);
    }, 3000);
    return (
        <div className="hero-image">
            <div className="layer">
                <div className="text">
                    <h1>Brandon Mellus</h1>
                    <div className="specialty">
                        {specialties[currentActive]}
                    </div>
                    <div className="btn-panel">
                        <a href="#Contact">Contact me!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroImage;

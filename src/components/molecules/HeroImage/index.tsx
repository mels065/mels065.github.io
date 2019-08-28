import * as React from "react";

import Contact from "../Contact";

import contacts from "./contacts";

import "./style.scss";

const specialties = [
    "Front-end",
    "Back-end",
    "Full-stack",
    "Game Development",
]

function renderContacts() {
    return contacts.map(({ icon, link }, i) => (
        <li key={i}>
            <Contact
                icon={icon}
                link={link}
            />
        </li>
    ));
}

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
                    <ul className="contacts">
                        {renderContacts()}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeroImage;

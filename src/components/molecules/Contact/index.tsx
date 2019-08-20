import * as React from "react";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

interface IContactProps {
    icon: IconProp;
    link: string;
}

const Contact = ({ icon, link }: IContactProps) => (
    <a target="_blank" className="contact" href={link}>
        <FontAwesomeIcon icon={icon} />
    </a>
);

export default Contact;

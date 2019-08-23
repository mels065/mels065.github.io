import * as React from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AnchorLink from "../../atoms/AnchorLink";
import Logo from "../../molecules/Logo";

import "./style.scss";

function NavBar() {
    const [show, toggleShow] = React.useState(false);
    const node = React.useRef(null);

    function pullDownMenuClickHandler(event: Event) {
        if (node.current.contains(event.target)) {
            toggleShow(!show);
        } else {
            toggleShow(false);
        }
    }

    function resizeHandler() {
        toggleShow(false);
    }

    React.useEffect(() => {
        document.addEventListener("mousedown", pullDownMenuClickHandler);
        window.addEventListener("resize", resizeHandler);

        return () => {
            document.removeEventListener("mousedown", pullDownMenuClickHandler);
            window.addEventListener("resize", resizeHandler);
        };
    }, [show]);

    return (
        <nav>
            <div className="left">
                <Logo />
            </div>
            <div className="right">
                <div className="hamburger-btn" ref={node}>
                    <FontAwesomeIcon icon={faBars} color="#eee" size="2x" />
                </div>
                <ul className={`menu${show ? " show" : ""}`}>
                    <li><AnchorLink href="#Skills">Skills</AnchorLink></li>
                    <li><AnchorLink href="#Projects">Projects</AnchorLink></li>
                    <li><AnchorLink href="#Contact">Contact</AnchorLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;

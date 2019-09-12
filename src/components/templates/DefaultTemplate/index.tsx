import * as React from "react";

import Copyright from "../../molecules/Copyright";
import HeroImage from "../../molecules/HeroImage";

import NavBar from "../../organisms/NavBar";

import "./style.scss";

interface IDefaultTemplateProps {
    heading?: React.ReactElement;
    children: React.ReactElement;
}
function DefaultTemplate({ children }: IDefaultTemplateProps) {
    return (
        <div id="Container">
            <header>
                <NavBar />
                <HeroImage />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Copyright />
            </footer>
        </div>
    );
}

export default DefaultTemplate;

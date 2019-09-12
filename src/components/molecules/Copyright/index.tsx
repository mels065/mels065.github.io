import * as React from "react";

import "./style.scss";

const currentYear = new Date().getFullYear();

const Copyright = () => (
    <div className="copyright">
        &copy;&nbsp;{`2019${currentYear > 2019 ? ` - ${currentYear}` : ""}`} Brandon Mellus
    </div>
);

export default Copyright;

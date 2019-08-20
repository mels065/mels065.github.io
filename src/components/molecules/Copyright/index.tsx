import * as React from "react";

import "./style.scss";

const currentYear = new Date().getFullYear();

const Copyright = () => (
    <small className="copyright">
        &copy;&nbsp;{`2019${currentYear > 2019 ? ` - ${currentYear}` : ""}`} Brandon Mellus
    </small>
);

export default Copyright;

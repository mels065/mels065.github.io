import * as React from "react";

import "./style.scss";

function clickThunkory(mode: string, onClick: (mode: string) => {}) {
    return () => {
        onClick(mode);
    }
}

interface ITabProps {
    children: string;
    onClick: (mode: string) => {};
}
const Tab = ({
    children,
    onClick,

}: ITabProps) => (
    <button className="tab" onClick={clickThunkory(children, onClick)}>
        {children}
    </button>
);

export default Tab;

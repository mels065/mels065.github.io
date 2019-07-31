import * as React from "react";

import "./style.scss";

function clickThunkory(mode: string, onClick: (mode: string) => void) {
    return () => {
        onClick(mode);
    }
}

interface ITabProps {
    children: string;
    onClick: (mode: string) => void;
    currentSelection: string;
}
const Tab = ({
    children,
    currentSelection,
    onClick,

}: ITabProps) => (
    <button 
        className="tab"
        disabled={currentSelection === children}
        onClick={clickThunkory(children, onClick)}
    >
        {children}
    </button>
);

export default Tab;

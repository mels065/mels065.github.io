import * as React from "react";

import "./style.scss";

interface IAnchorLinkProps {
    href: string;
    children: string;
}
const AnchorLink = ({
    href,
    children,
}: IAnchorLinkProps) => (
    <a className="anchor-link" href={href}>{children}</a>
);

export default AnchorLink;

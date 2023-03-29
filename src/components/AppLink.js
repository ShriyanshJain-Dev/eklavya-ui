import React from "react";
import { Link } from "react-router-dom";

export function AppLink({ children, ...props}) {
    return <Link {...props}>{children}</Link>
}

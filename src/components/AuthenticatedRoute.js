import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


const AuthenticatedRoute = ({ children,fallback = "/login", ...props }) => {
    const { accessToken, idToken } = useSelector((state) => state.auth);
    return accessToken && accessToken.length > 0 && idToken ? (
        <Route {...props}>{children}</Route>
    ) : (
            <Redirect to={fallback} />
    );
}


export default AuthenticatedRoute;
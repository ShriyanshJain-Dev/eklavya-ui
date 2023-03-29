import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


const UnauthenticatedRoute = ({ overridePath = "/", children, ...props }) => {
    const { accessToken, idToken } = useSelector((state) => state.auth);
    return accessToken && accessToken.length > 0 && idToken ? (
        <Redirect to={overridePath} />
    ) : (
        <Route {...props}> {children}</Route>
    );
}


export default UnauthenticatedRoute;
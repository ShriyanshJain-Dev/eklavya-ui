import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


const UnauthenticatedRoute = ({ overridePath = "/", childern, ...props }) => {
    const { accessToken, idToken } = useSelector((state) => state.auth);
    return accessToken && accessToken.length > 0 && idToken ? (
        <Redirect to={overridePath} />
    ) : (
        <Route {...props}> {childern}</Route>
    );
}


export default UnauthenticatedRoute;
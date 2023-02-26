import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const UnauthenticatedRoute = ({ overridePath = "/", childern, ...props }) => {
    const { accessToken, idToken } = useSelector((state) => state.auth);
    return accessToken && accessToken.length > 0 && idToken ? (
        <Navigate to={overridePath} />
    ) : (
        <Route {...props}> {childern}</Route>
    );
}


export default UnauthenticatedRoute;
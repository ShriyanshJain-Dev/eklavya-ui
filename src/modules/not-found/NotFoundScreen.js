import React from "react";
import { useLocation } from "react-router";
import { AppLink } from "../../components/AppLink";

export function NotFoundScreen() {
    let location = useLocation();

    return(
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
        }}
        >
            <div style={{width: "33%"}}>
                <h1>Not Found</h1>
                <p>
                    <code>{location.pathname}</code>Not Found
                </p>
                <hr/>
                <AppLink to="/">Go Back Home</AppLink>
            </div>

        </div>
    )
}
import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UnuthenticatedRoute from "./components/UnuthenticatedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Navigation from "./components/Navigation";
import LandingScreen from "./modules/landing/LandingScreen";
import Login from "./modules/auth/Login";



export function Routes() {

    return (
        <StyledLayout>
            <Router>
                <StyledPageContainer>
                    <Switch>
                        <UnuthenticatedRoute
                            path={["/login", "/auth/login", "/auth/callback"]}
                            exact
                        />
                    </Switch>
                    <Switch>
                        <AuthenticatedRoute
                            path="*"
                        >
                            < Navigation
                            />
                        </AuthenticatedRoute>
                        <AuthenticatedRoute
                            path="/" exact>
                            <LandingScreen />
                        </AuthenticatedRoute>
                        <UnuthenticatedRoute path="/login">
                            <Login />
                        </UnuthenticatedRoute>
                    </Switch>
                </StyledPageContainer>
            </Router>
        </StyledLayout>  
    );
};


const StyledLayout = styled.div`
    padding : 0;
    margin: 0;
    min-height: 100vh;
    background-color : #f6f6f6;
`;

const StyledPageContainer = styled.div`
    padding-top : 3rem;
    margin-left: auto;
    margin-right: auto;
    overflow:hidden;
    margin-bottom:0;
    background-color: white;
    height: calc(100vh - 3rem);
`;

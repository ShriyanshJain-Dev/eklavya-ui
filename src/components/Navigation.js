import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Navigation({ }) {
    return (
        <StyledLayout>
            <h3>Navigation</h3>
        </StyledLayout>
        );
};

const StyledLayout = styled.div`
    padding : 0;
    margin: 0;
    min-height: 100vh;
    width:100vw;
    height:100vw;
    background-color : #f6f6f6;
`;
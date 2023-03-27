import React from "react";
import styled from "styled-components";

const LandingScreen = ({ }) => {
    return (
        <StyledLayout>
            <h3>Landing PAGE</h3>
        </StyledLayout>
    )
};

const StyledLayout = styled.div`
    padding : 0;
    margin: 0;
    min-height: 100vh;
    width:100vw;
    height:100vw;
    background-color : #f6f6f6;
`;

export default LandingScreen;
import React from "react";
import styled from "styled-components";


const Login = () => {
    return (
        <StyledContainer>
            <StyledLoginFormContainer>
               <div>
                <h1>EKLAVYA Hello</h1>
               </div>
            </StyledLoginFormContainer>
        </StyledContainer>
        );
}

const StyledContainer = styled.div`
    background-image:liner-gradient(#97bb39,#638c20);
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vw;
    display:flex;
    flex-flow:row wrap;
    align-items:stretch;
    overflow:hidden;
`;

const StyledLoginFormContainer = styled.div`
    display:flex;
    h1{
        font-size : 60px;
        margin-top: 5px;
        font-weight : 500;
    }
`;

export default Login;
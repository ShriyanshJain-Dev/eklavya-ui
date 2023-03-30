import React, {useState, useEffect} from "react";
import styled from "styled-components";
import  {GoogleLogin} from "react-google-login";


const Login = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    const onSuccess =(response) => {
        console.log(response.profileObj)
    }

    const onFailure=(response) => {
        console.log(response);
        
    }

    window.onresize = (event) => {
        setScreenWidth(event.target.innerWidth);
        setScreenHeight(event.target.innerHeight);
    }
    console.log("1232");
    return (
        // <StyledContainer>
        //     <StyledLoginFormContainer>
               <GoogleLogin
                    clent_id = "184991728615-1mp9d7lph7kpm9lg84fm0naf9atre5rh.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={onSuccess}
                    inFailure={onFailure}
                    cookiePolicy={'Single_host_origin'}
                    isSignedIn={true}
                >
               </GoogleLogin>
        //     </StyledLoginFormContainer>
        // </StyledContainer>
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
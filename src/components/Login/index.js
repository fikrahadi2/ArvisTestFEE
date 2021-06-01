import React/*, {useState}*/ from 'react';
import {LoginContainer, LoginH1, LoginItem, LoginUsername, LoginPassword, UsernameInput, UsernameLabel, PasswordInput, PasswordLabel, LoginBtn, LoginBtnLink} from './LoginElements';

const LoginSection = () => {
    return (
        <LoginContainer id="home">
            <LoginH1>Login</LoginH1>
            <LoginItem>
                <LoginUsername>
                    <UsernameLabel>Username</UsernameLabel>
                    <UsernameInput type="text"></UsernameInput>
                </LoginUsername>
                <LoginPassword>
                    <PasswordLabel>Password</PasswordLabel>
                    <PasswordInput type="text"></PasswordInput>
                </LoginPassword>
            </LoginItem>
            <LoginBtn>
                <LoginBtnLink to="/index">SUBMIT</LoginBtnLink>
            </LoginBtn>
        </LoginContainer>
    )
}

export default LoginSection

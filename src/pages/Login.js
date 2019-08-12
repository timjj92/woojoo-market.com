import React, { Fragment, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { MasterContext } from '../Context';
import Nav from '../components/Public/Nav';
import LoginContainer from '../components/Login/LoginContainer';

const LoginSection = styled.section`
    height: 100vh;
    background: #fef6ff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Login = ({ location }) => {
    const { pathname } = location;

    return (
        <Fragment>
            <Nav pathname={pathname} />
            <LoginSection>
                <LoginContainer pathname={pathname} />
            </LoginSection>
        </Fragment>
    );
};

export default Login;

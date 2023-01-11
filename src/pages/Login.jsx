import React from 'react';
import LoginForm from "../component/UI/Forms/LoginForm";
import CenterLayout from "../component/UI/Layouts/Center/CenterLayout";


const Login = () => {
    return (
        <CenterLayout>
            <h1>Авторизация</h1>
            <LoginForm>
            </LoginForm>
        </CenterLayout>
    );
};

export default Login;
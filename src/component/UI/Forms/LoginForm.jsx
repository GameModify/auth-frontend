import React from 'react';
import Button from "../Buttons/Default/Button";
import InputText from "../Inputs/Default/InputText";

const LoginForm = () => {
    return (
        <form>
            <InputText/>
            <InputText/>
            <Button>Войти</Button>
        </form>
    );
};

export default LoginForm;
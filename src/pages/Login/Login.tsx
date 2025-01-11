import React, { useState } from 'react';
import LoginForm from "./LoginForm.tsx";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <LoginForm
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
        />
    );
}

export default Login;
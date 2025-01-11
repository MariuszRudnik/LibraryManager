import React from 'react';
import { TextField, Button, Container, Box } from '@mui/material';

interface LoginFormProps {
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    handleSubmit: (event: React.FormEvent) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ email, password, setEmail, setPassword, handleSubmit }) => {
    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                    '& .MuiButton-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    required
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    required
                    id="password"
                    label="Hasło"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Zaloguj
                </Button>
            </Box>
        </Container>
    );
};

export default LoginForm;
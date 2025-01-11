import React from 'react';
import { TextField, Button, Container, Box } from '@mui/material';

interface RegisterFormProps {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    handleSubmit: (event: React.FormEvent) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ firstName, lastName, email, password, setFirstName, setLastName, setEmail, setPassword, handleSubmit }) => {
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
                    id="firstName"
                    label="Imię"
                    variant="outlined"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    required
                    id="lastName"
                    label="Nazwisko"
                    variant="outlined"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
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
                    Zarejestruj
                </Button>
            </Box>
        </Container>
    );
};

export default RegisterForm;
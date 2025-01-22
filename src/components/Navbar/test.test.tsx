import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { InfoLogin } from './InfoLogin';
import { useNavigate } from '@tanstack/react-router';

vi.mock('@tanstack/react-router', () => ({
  useNavigate: vi.fn(),
}));

describe('InfoLogin', () => {
  it('should navigate to /register when the register button is clicked', () => {
    const navigate = vi.fn();
    (useNavigate as vi.Mock).mockReturnValue(navigate);

    render(<InfoLogin />);

    const registerButton = screen.getByTestId('register-button');
    fireEvent.click(registerButton);

    expect(navigate).toHaveBeenCalledWith({ to: '/register' });
  });

  it('should navigate to /login when the login button is clicked', () => {
    const navigate = vi.fn();
    (useNavigate as vi.Mock).mockReturnValue(navigate);

    render(<InfoLogin />);

    const loginButton = screen.getByText('Zaloguj się');
    fireEvent.click(loginButton);
    expect(navigate).toHaveBeenCalledWith({ to: '/login' });
  });
});

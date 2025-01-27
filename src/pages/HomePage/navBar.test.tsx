import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('renders the NavBar with the correct title', () => {
    render(<NavBar />);

    const title = screen.getByText('MyApp');
    expect(title).toBeInTheDocument();
  });

  it('renders all menu items', () => {
    render(<NavBar />);

    const menuItems = [
      'Home',
      'Login',
      'Rejestracja',
      'Panel admina',
      'Panel klienta',
    ];

    menuItems.forEach((item) => {
      const menuItem = screen.getByText(item);
      expect(menuItem).toBeInTheDocument();
    });
  });
});

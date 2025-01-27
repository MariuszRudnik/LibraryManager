import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BookList from './BookList';

describe('BookList', () => {
  it('renders without crashing', () => {
    vi.mock('@tanstack/react-router', () => ({
      Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
        <a href={to}>{children}</a>
      ),
    }));

    const mockBooks = [
      {
        id: '1',
        title: 'Książka 1',
        author: 'Autor 1',
        copies: 5,
        images: 'book1.jpg',
      },
      {
        id: '2',
        title: 'Książka 2',
        author: 'Autor 2',
        copies: 3,
        images: 'book2.jpg',
      },
    ];

    expect(() => render(<BookList books={mockBooks} />)).not.toThrow();
  });
});

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import BookList from './BookList.tsx';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from '../../routeTree.gen';

const router = createRouter({
  routeTree,
  context: { queryClient: undefined! },
});

describe('HomePage', () => {
  it('should render the BookList component', () => {
    const books = [
      {
        author: 'J.K. Rowling',
        availableCopies: 7,
        borrowedCopies: 2,
        description:
          "Pierwsza część przygód młodego czarodzieja Harry'ego Pottera, który odkrywa swoje magiczne dziedzictwo i rozpoczyna naukę w Szkole Magii i Czarodziejstwa w Hogwarcie.",
        id: '1',
        images: 'Book_1.png',
        title: 'Harry Potter i Kamień Filozoficzny',
        year: 1997,
        copies: 9,
      },
    ];
    render(
      <RouterProvider router={router}>
        <BookList books={books} />
      </RouterProvider>
    );
    const section = screen.getByTestId('booklist');
    console.log(section);
    expect(section).not.toBeNull();
  });
});

import React from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '@mui/material';

interface BookListProps {
    books: { id: string, title: string, author: string, copies: number, image?: string }[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
    return (
        <div>
            Lista książek do wypożyczenia
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>
                            {book.title} - {book.author} ({book.copies} egzemplarzy)
                            <Button>Wypożycz</Button>
                            <Button>Opis</Button>
                            <Button>edit</Button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
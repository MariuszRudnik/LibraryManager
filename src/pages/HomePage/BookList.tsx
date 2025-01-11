// import React from 'react';
// import { Link } from '@tanstack/react-router';
// import { Button } from '@mui/material';

// interface BookListProps {
//     books: { id: string, title: string, author: string, copies: number, image?: string }[];
// }

// const BookList: React.FC<BookListProps> = ({ books }) => {
//     return (
//         <div>
//             Lista książek do wypożyczenia
//             <ul>
//                 {books.map(book => (
//                     <li key={book.id}>
//                         <Link to={`/books/${book.id}`}>
//                             {book.title} - {book.author} ({book.copies} egzemplarzy)
//                             <Button>Wypożycz</Button>
//                             <Button>Opis</Button>
//                             <Button>edit</Button>
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default BookList;

import React from 'react';
import { Link } from '@tanstack/react-router';
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import Book1Image from '../../assets/Book_1.png';
import Book2Image from '../../assets/Book_2.png';
import Book3Image from '../../assets/Book_3.png';

interface BookListProps {
    books: { id: string, title: string, author: string, copies: number }[]; // Bez image w propsach
}

const BookList: React.FC<BookListProps> = ({ books }) => {
    // Mapa obrazów na podstawie id książki
    const imageMap: Record<string, string> = {
        '1': Book1Image,
        '2': Book2Image,
        '3': Book3Image,
    };

    // Dodanie obrazów do książek
    const booksWithImages = books.map((book) => ({
        ...book,
        image: imageMap[book.id] || '', // Jeśli nie znajdzie obrazu, ustawi pusty string
    }));

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 4, backgroundColor: '#adaaaa' }}>
            <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: 1200 }}>
                {booksWithImages.map((book) => (
                    <Grid item xs={12} sm={6} md={4} key={book.id}>
                        <Card 
                            sx={{ 
                                height: 650,
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'space-between', 
                                alignItems: 'center',
                                backgroundColor: '#121212',
                                color: 'white',
                                padding: 2,
                                textAlign: 'center',
                            }}
                        >
                            {book.image && (
                                <CardMedia
                                    component="img"
                                    image={book.image}
                                    alt={`Okładka książki ${book.title}`}
                                    sx={{ 
                                        height: 480,
                                        objectFit: 'cover',
                                        borderRadius: 1,
                                        width: '100%',
                                    }}
                                />
                            )}
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {book.title}
                                </Typography>
                                <Typography variant="subtitle1" color="gray">
                                    {book.author}
                                </Typography>
                                <Typography variant="body2" color="gray">
                                    {book.copies} egzemplarzy dostępnych
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button 
                                    size="small" 
                                    variant="contained" 
                                    color="primary" 
                                    component={Link} 
                                    to={`/books/${book.id}`}
                                >
                                    Wypożycz
                                </Button>
                                <Button 
                                    size="small" 
                                    variant="outlined" 
                                    color="secondary" 
                                    component={Link} 
                                    to={`/books/${book.id}/description`}
                                >
                                    Opis
                                </Button>
                                <Button 
                                    size="small" 
                                    variant="text" 
                                    color="info" 
                                    component={Link} 
                                    to={`/books/${book.id}/edit`}
                                >
                                    Edytuj
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default BookList;


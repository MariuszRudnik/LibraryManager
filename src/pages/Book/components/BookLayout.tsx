import {CardMedia} from "@mui/material";


interface Book {
    id: string;
    title: string;
    author: string;
    copies: number;
    images: string;
    availableCopies: number;
    borrowedCopies: number;
    description: string;
    year: number;
}

interface BookLayoutProps {
    book: Book;
}
function BookLayout({book}:BookLayoutProps) {
    const {title, author, year, images, description} = book;
    const imagePath = `../books/${images}`;
    return (
        <div>
            <h1>{title}</h1>
            <p>{author}</p>
            <p>{year}</p>
            <p>{description}</p>
            {images && (
                <CardMedia
                    component="img"
                    image={imagePath}
                    alt={`Okładka książki ${title}`}
                    sx={{
                        height: 480,
                        objectFit: 'cover',
                        borderRadius: 1,
                        width: '100%',
                    }}
                />
            )}
        </div>
    );
}

export default BookLayout;
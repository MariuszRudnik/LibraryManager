import BookList from './BookList';

function HomePage() {
    const books = [
        { id: '1', title: 'Harry Potter', author: 'J.K. Rowling', copies: 5, image: 'ss' },
        { id: '2', title: 'Wiedźmin', author: 'Andrzej Sapkowski', copies: 3 },
        { id: '3', title: 'Władca Pierścieni', author: 'J.R.R. Tolkien', copies: 4 },
    ];

    return (
        <div style={{ backgroundColor: '#adaaaa', minHeight: '100vh' }}>

            <BookList books={books} />
        </div>
    );
}

export default HomePage;

import {useSuspenseQuery} from "@tanstack/react-query";
import {bookQuery} from "../../routes/book/-loader/booksLooader.tsx";
import BookLayout from "./components/BookLayout.tsx";


function Book({book}:any) {
    const { data } = useSuspenseQuery(bookQuery(book));
    console.log(data);
    return (
        <BookLayout book={data}/>
    );
}

export default Book;
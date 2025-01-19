import BookList from "./BookList";
import { useSuspenseQuery } from "@tanstack/react-query";
import { booksOptions } from "../../queries/books.ts";

function HomePage() {
  const { data } = useSuspenseQuery(booksOptions);

  return (
    <div>
      <BookList books={data} />
    </div>
  );
}

export default HomePage;

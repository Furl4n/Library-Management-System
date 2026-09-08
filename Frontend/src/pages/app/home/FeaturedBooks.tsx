import BookCard from "../../../components/books/BookCard";
import { useBookData } from "../../../hooks/useBook";

export default function FeaturedBooks() {
    const { data, isLoading, isError } = useBookData();

    if(isLoading) {
        return <p>Carregando livros...</p>;
    }

    if(isError) {
        return <p>Erro ao carregar os livros.</p>;
    }

    const books = data ?? [];

    return (
        <section>
            <h2>Livros</h2>

            <div>
                {books.slice(0, 4).map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </section>
    )
}
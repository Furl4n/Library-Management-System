import BookCard from "../../../components/books/BookCard";
import { useBookData } from "../../../hooks/useBook";

const books = [
    {
        id: 1,
        title: "Senhor dos Anéis",
        author: "J. R. R. Tolkien",
        year: 1954,
        genre: "Fantasia",
        status: "Ativo"
    },
    {
        id: 2,
        title: "Dom Casmurro",
        author: "Machado de Assis",
        year: 1899,
        genre: "Romance",
        status: "Ativo"
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Ficção",
        status: "Ativo"
    },
    {
        id: 4,
        title: "O Hobbit",
        author: "J. R. R. Tolkien",
        year: 1937,
        genre: "Fantasia",
        status: "Ativo"
    }
];

export default function FeaturedBooks() {
    /*const { data, isLoading, isError } = useBookData();

    if(isLoading) {
        return <p>Carregando livros...</p>;
    }

    if(isError) {
        return <p>Erro ao carregar os livros.</p>;
    }

    const books = data?.data ?? [];

    */

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
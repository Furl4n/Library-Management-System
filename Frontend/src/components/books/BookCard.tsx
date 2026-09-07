import type { Book } from "../../interfaces/Book"

interface BookCardProps {
    book: Book;
}

export default function BookCard({ book }: BookCardProps){
    return(
        <div className="w-48">
            <img src="/capa-livro.jpeg"
                alt={`Capa do livro ${book.title}`}
                className="
                    w-full
                    border
                    border-slate-200
                    rounded-md
                    shadow-md
                    transition-transform
                    hover:scale-105
                "
            />
            
            <div className="pt-1">
                <h2 className="font-bold">
                    {book.title}
                </h2>

                <p className="font-light text-sm">
                    {book.author}
                </p>
            </div>
        </div>
    )
}
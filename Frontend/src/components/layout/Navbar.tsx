import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-beetween px-6">
                <img src="src\assets\hero.png" alt="imagem" />
                <Link to={"/"} className="text 2x1 font-bold text-blue-600">
                    Biblioteca
                </Link>

                <div className="flex items-center gap-8">
                    <Link to={"/"} className="hover:text-blue-600 trasition-colors">
                        Home
                    </Link>

                    <Link to={"/books"} className="hover: text-blue-600 transition-colors" >
                        Livros
                    </Link>

                    <Link to={"/reservations"} className="hover: text-blue-600 trasition-colors" >
                        Reservas
                    </Link>

                    <Link to={"/loans"} className="hover: text-blue-600 transition-colors" >
                        Empréstimos
                    </Link>
                </div>

                <Link to={"/Login"} className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
                    Entrar
                </Link>
            </div>
        </nav>
    );
}
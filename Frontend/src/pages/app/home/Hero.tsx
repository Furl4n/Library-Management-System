import Container from "../../../components/ui/Container"

export default function Hero() {
    return (
        <section className="bg-slate-50 py-2">
            <Container>
                <div className="max-w-5xl">
                    <h1 className="mt-2 text-2xl font-bold text-slate-800">
                        Pesquise livros, acompanhe seus empréstimos e faça reservas de maneira simples e rápida.
                    </h1>
                </div>
            </Container>
        </section>
    );
}
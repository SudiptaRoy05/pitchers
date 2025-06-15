import SearchForm from "./SearchForm";

export default function Hero({ query }: { query?: string }) {
    return (
        <section className="h-2/12 bg-blue-50 flex items-center justify-center px-4 py-20">
            <div className="max-w-3xl text-center text-gray-800 space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                    Welcome to <span className="text-blue-600">Pitchers</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600">
                    Empowering your startup dreams pitch, connect, and grow with confidence.
                </p>
                <div className="flex justify-center gap-4">
                    <SearchForm query={query} />
                </div>
            </div>
        </section>
    );
}

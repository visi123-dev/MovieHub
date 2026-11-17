
const movies = [
  { title: "Interstellar", year: 2014, rating: "8.7", genre: "Sci-Fi", image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { title: "Inception", year: 2010, rating: "8.8", genre: "Action", image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg" },
  { title: "The Dark Knight", year: 2008, rating: "9.0", genre: "Action", image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { title: "Avatar", year: 2009, rating: "7.9", genre: "Fantasy", image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05090d] text-white">
      <header className="flex justify-between items-center px-10 py-6 border-b border-cyan-400/20">
        <h1 className="text-3xl font-bold text-cyan-400">
          MovieHub<span className="text-white">.</span>
        </h1>

        <nav className="flex gap-8">
          <a href="/" className="text-cyan-400">Home</a>
          <a href="/movies" className="hover:text-cyan-400">Movies</a>
          <a href="/my-list" className="hover:text-cyan-400">My List</a>
        </nav>
      </header>

      <section className="px-10 py-24 bg-gradient-to-r from-[#07141c] to-[#05090d]">
        <p className="text-cyan-400 uppercase tracking-[5px] mb-5">
          Your cinema experience
        </p>

        <h2 className="text-5xl md:text-7xl font-bold max-w-3xl mb-6">
          Discover Your Next Favorite Movie.
        </h2>

        <p className="text-gray-400 text-lg mb-8">
          Explore movies, discover stories and create your own collection.
        </p>

        <a href="/movies" className="inline-block bg-cyan-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-cyan-300 transition">
          Explore Movies
        </a>
      </section>

      <section className="px-10 py-14">
        <h2 className="text-3xl font-bold mb-8">
          Popular <span className="text-cyan-400">Movies</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <div key={movie.title} className="bg-[#0d171e] rounded-xl overflow-hidden border border-cyan-400/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10 transition">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-lg">{movie.title}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  {movie.year} · {movie.genre}
                </p>
                <p className="text-cyan-400 mt-3">★ {movie.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

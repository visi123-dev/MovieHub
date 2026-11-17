export default function MyList() {
  return (
    <main className="min-h-screen bg-[#05090d] text-white">

      <header className="px-10 py-6 border-b border-cyan-400/20">
        <h1 className="text-3xl font-bold text-cyan-400">
          MovieHub.
        </h1>
      </header>

      <section className="px-10 py-14">
        <h2 className="text-4xl font-bold mb-4">
          My List
        </h2>

        <p className="text-gray-400">
          Your saved movies will appear here.
        </p>
      </section>

    </main>
  );
}
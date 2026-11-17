import Link from "next/link";

export default function Navbar() {
    return(
        <header>
        <h1>MovieHub.</h1>

        <nav>
            <Link href="/">Home</Link>
            <Link href="/movies">Movies</Link>
            <Link href="/my-list">My List</Link>
            </nav>
            </header>
    );
}
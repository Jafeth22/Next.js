import Link from 'next/link'

function HomePage() {
    console.log("Home")
    return (
        <>
            <header className="">
                <nav>
                    <ul>
                        <li>
                            <Link href="/about">
                                <a >About</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <h1>Home Page</h1>
            </main>
        </>
    )
}

export default HomePage;
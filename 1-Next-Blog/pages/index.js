import Head from 'next/head'
import Link from 'next/link'

function HomePage() {
    console.log("Home")
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" value="This is the About page" />
            </Head>
            <main>
                <h1>Home Page</h1>
                <ul>
                    <li>
                        <Link href="/posts/first-post" >
                            <a>First Post</a>
                        </Link>
                    </li>
                </ul>
            </main>
        </>
    )
}

export default HomePage;
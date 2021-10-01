import Head from 'next/head'

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
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </main>
        </>
    )
}

export default HomePage;
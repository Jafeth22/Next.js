import Head from 'next/head'

function HomePage() {
    console.log("Home")
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" value="This is the About page" />
            </Head>
            <main>
                <h1>Home Page</h1>
            </main>
        </>
    )
}

export default HomePage;
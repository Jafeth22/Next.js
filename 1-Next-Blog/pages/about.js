import Head from 'next/head'

function AboutPage() {
    console.log("About")
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" value="This is the Home page" />
            </Head>
            <main>
                <h1>About Page</h1>
            </main>
        </>
    )
}

export default AboutPage;
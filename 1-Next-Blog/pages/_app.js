import Head from 'next/head'
import NavBar from '../components/NavBar'
import './../styles/global.css'

/**
 * This component will receive the props automacally by the framework,
 * moreover, this is like the layout of the project
 */
function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel='icon' href='/icons/favicon.ico' />
            </Head>
            <header>
                <NavBar />
            </header>
            <Component {...pageProps} />
        </>
    )
}

export default App;
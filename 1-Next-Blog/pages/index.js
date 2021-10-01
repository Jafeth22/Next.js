import Head from 'next/head'
import Link from 'next/link'
import { getPosts } from '../lib/post';

export async function getStaticProps(){
    const posts = await getPosts();
    return { props: {posts} }
}

function HomePage({posts}) {
    console.log("[HomePage] render", posts)
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" value="This is the About page" />
            </Head>
            <main>
                <h1>Home Page</h1>
                <ul>
                    {
                        posts.map((post) => (
                            <li key={post.slug}>
                                <Link href={`/posts/${post.slug}`} >
                                    <a>{post.title}</a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </main>
        </>
    )
}

export default HomePage;
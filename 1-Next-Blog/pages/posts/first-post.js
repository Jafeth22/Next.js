import { readFile } from 'fs/promises'
import Head from 'next/head'

/**
 * This function runs only on SERVER side, for that reason we don't see the message on the web console, but it does on the SERVER console
 */
export async function getStaticProps() {
    console.log('[FirstPostPage] getStaticProps()')
    const data = await readFile('content/posts/first-post.json', 'utf8')
    const post = JSON.parse(data);

    return {
        props: { post }
    };
}

/**
 * This function runs only on CLIENT side
 */
function FirstPostPage({post}) {
    console.log('[FirstPostPage] render', post);
    return(
        <>
            <Head>
                <title>{post.title} - My blog</title>
            </Head>
            <main>
                <h1>{post.title}</h1>
                <p>
                    {post.body}
                </p>
            </main>
        </>
    );
}

export default FirstPostPage;
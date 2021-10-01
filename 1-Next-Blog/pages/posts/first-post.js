
import Head from 'next/head';
import { getPost } from '../../lib/post';


/**
 * This function runs only on SERVER side, for that reason we don't see the message on the web console, but it does on the SERVER console
 */
export async function getStaticProps() {
    console.log('[FirstPostPage] getStaticProps()')
    const post = await getPost('first-post');

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
                <h5>{post.date}</h5>
                {/* dangerouslySetInnerHTML = This is to improve the security and not insert the HTML directly*/}
                <article dangerouslySetInnerHTML={{__html: post.body}} />
                {/* <p>
                    {post.body}
                </p> */}
            </main>
        </>
    );
}

export default FirstPostPage;
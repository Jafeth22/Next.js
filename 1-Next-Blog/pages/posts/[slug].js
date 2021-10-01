
import Head from 'next/head';
import { getPost, getSlugs } from '../../lib/post';

export async function getStaticPaths() {
    const slugs = await getSlugs();
    return {
        paths: slugs.map((slug) => ({
            params: { slug }
        })),
        fallback: false //This in case any path match, it won't show 404 page
    }
    // return {
    //     paths: [
    //         { params: { slug: 'first-post' } },
    //         { params: { slug: 'second-post' } }
    //     ],
    //     fallback: false //This in case any path match, it won't show 404 page
    // }
}

/**
 * This function runs only on SERVER side, for that reason we don't see the message on the web console, but it does on the SERVER console
 */
export async function getStaticProps({ params: { slug } }) {
    console.log('[PostPage] getStaticProps(): ', slug)
    const post = await getPost(slug);

    return {
        props: { post }
    };
}

/**
 * This function runs only on CLIENT side
 */
function PostPage({ post }) {
    console.log('[PostPage] render', post);
    return (
        <>
            <Head>
                <title>{post.title} - My blog</title>
            </Head>
            <main>
                <h1>{post.title}</h1>
                <h5>{post.date}</h5>
                {/* dangerouslySetInnerHTML = This is to improve the security and not insert the HTML directly*/}
                <article dangerouslySetInnerHTML={{ __html: post.body }} />
                {/* <p>
                    {post.body}
                </p> */}
            </main>
        </>
    );
}

export default PostPage;
import Head from 'next/head'

export async function getStaticProps() {
    return {
        props: {
            post: {
                title: "First Post",
                body: "Body Content"
            }
        }
    };
}

function FirstPostPage({post}) {
    console.log('FirstPostPage', post);
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
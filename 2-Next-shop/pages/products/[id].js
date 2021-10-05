import Head from 'next/head';
import Title from '../../components/Title';
import { getProducts, getProduct } from '../../lib/products';

export async function getStaticPaths() {
    const products = await getProducts();
    return {
        paths: products.map((product) => ({
            params: { id: product.id.toString() }
        })),
        fallback: 'blocking' //The response is blocked until the new page is ready
    }
}

export async function getStaticProps({ params: { id } }) {
    const product = await getProduct(id)
    return { 
        props: { product },
        revalidate: 30
    }
}

function ProductPage({ product }) {
    console.log('[ProductPage] render', product);
    return (
        <>
            <Head>
                <title>Next Shop</title>
            </Head>
            <main className="px-6 py-5" >
                <Title>{product.title}</Title>
                <p>
                    {product.description}
                </p>
            </main>
        </>
    );
}

export default ProductPage;
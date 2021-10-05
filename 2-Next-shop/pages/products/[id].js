import Head from 'next/head';
import Title from '../../components/Title';
import { getProducts, getProduct } from '../../lib/products';

export async function getStaticPaths() {
    const products = await getProducts();
    return {
        paths: products.map((product) => ({
            params: { id: product.id.toString() }
        })),
        fallback: false //This in case any path match, it won't show 404 page'
    }
}

export async function getStaticProps({ params: { id } }) {
    const product = await getProduct(id)
    return { props: { product } }
}

function ProductPage({ product }) {
    console.log('ProductPage', product);
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
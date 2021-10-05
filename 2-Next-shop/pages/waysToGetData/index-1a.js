// Fetch products on the SERVER side
// On this case, just will load the data once (when the page starts by first time), if the data suffer some change, it won't be shown
import Head from 'next/head';
import Title from '../../components/Title';
import { getProducts } from '../../lib/products';

// Static Generation
export async function getStaticProps() {
  console.log('[HomePage] getStaticProps()');
  const products = await getProducts();
  return { props: { products } }
}

export default function HomePage({ products }) {
  console.log('HomePage', products);
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-5" >
        <Title>Next Shop</Title>
        <ul>
          {products.map((product) => (
            <li key={product.id} >
              {product.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
